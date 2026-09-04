"""
Carrier Guide - Dedicated Python Server with Fast2SMS & Static File Hosting
Supports real SMS delivery to Indian mobile numbers (+91)
"""

import http.server
import socketserver
import json
import urllib.request
import urllib.parse
import os

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

# Fast2SMS Configuration
# Users can enter their API key via the web portal or set environment variable FAST2SMS_API_KEY
DEFAULT_FAST2SMS_API_KEY = os.environ.get("FAST2SMS_API_KEY", "")

class CarrierGuideHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_POST(self):
        if self.path == '/api/send-otp':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length).decode('utf-8')
            
            try:
                data = json.loads(post_data)
                phone = data.get('phone', '').strip()
                otp = data.get('otp', '').strip()
                name = data.get('name', 'Candidate').strip()
                api_key = data.get('apiKey', '').strip() or DEFAULT_FAST2SMS_API_KEY

                print(f"[SMS Gateway] Request received to send OTP {otp} to +91 {phone} for {name}")

                result = self.send_fast2sms(phone, otp, api_key)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps(result).encode('utf-8'))
            except Exception as e:
                print(f"[SMS Gateway Error] {str(e)}")
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.end_headers()

    def send_fast2sms(self, phone, otp, api_key):
        if not api_key:
            return {
                "success": False,
                "mode": "simulated",
                "message": f"No Fast2SMS API key configured. Simulated OTP for testing: {otp}"
            }

        url = "https://www.fast2sms.com/dev/bulkV2"
        headers = {
            "authorization": api_key,
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "CarrierGuideApp/1.0"
        }

        # Fast2SMS OTP Route
        payload = {
            "variables_values": otp,
            "route": "otp",
            "numbers": phone
        }
        encoded_data = urllib.parse.urlencode(payload).encode('utf-8')

        try:
            req = urllib.request.Request(url, data=encoded_data, headers=headers, method="POST")
            with urllib.request.urlopen(req, timeout=10) as response:
                resp_text = response.read().decode('utf-8')
                resp_json = json.loads(resp_text)
                print(f"[Fast2SMS Response] {resp_json}")
                return {
                    "success": resp_json.get("return", False),
                    "mode": "live_sms",
                    "fast2smsResponse": resp_json,
                    "message": "Real SMS sent to your mobile phone!"
                }
        except urllib.error.HTTPError as he:
            err_body = he.read().decode('utf-8')
            print(f"[Fast2SMS HTTP Error] {he.code}: {err_body}")
            return {
                "success": False,
                "mode": "error",
                "message": f"Fast2SMS error: {err_body}"
            }
        except Exception as e:
            print(f"[Fast2SMS Network Error] {str(e)}")
            return {
                "success": False,
                "mode": "error",
                "message": str(e)
            }

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), CarrierGuideHandler) as httpd:
        print("==================================================")
        print(f"[SUCCESS] Carrier Guide Server Running at http://localhost:{PORT}")
        print("[SMS GATEWAY] Fast2SMS Real SMS Gateway Enabled")
        print("==================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
