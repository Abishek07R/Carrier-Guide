// ==========================================================================
// CARRIER GUIDE - APPLICATION CONTROLLER & LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- Application State ---
    const state = {
        currentStep: 1,
        candidateName: '',
        candidatePhone: '',
        selectedStreamId: null,
        shortlistedDegrees: new Set()
    };

    // --- DOM Elements ---
    const stepSections = {
        1: document.getElementById('sectionStep1'),
        2: document.getElementById('sectionStep2'),
        3: document.getElementById('sectionStep3'),
        4: document.getElementById('sectionStep4')
    };

    const headerUserBadge = document.getElementById('headerUserBadge');
    const headerUserName = document.getElementById('headerUserName');
    const btnRestartApp = document.getElementById('btnRestartApp');
    const toastContainer = document.getElementById('toastContainer');

    // Step 1 Elements (Instant Automatic Verification)
    const candidateNameInput = document.getElementById('candidateNameInput');
    const candidatePhoneInput = document.getElementById('candidatePhoneInput');
    const btnInstantVerify = document.getElementById('btnInstantVerify');
    const authLoginForm = document.getElementById('authLoginForm');

    // Step 2 Elements
    const welcomeCandidateName = document.getElementById('welcomeCandidateName');
    const streamsGridContainer = document.getElementById('streamsGridContainer');
    const btnConfirmStream = document.getElementById('btnConfirmStream');

    // Step 3 Elements
    const bannerStreamIcon = document.getElementById('bannerStreamIcon');
    const bannerStreamTitle = document.getElementById('bannerStreamTitle');
    const bannerStreamDesc = document.getElementById('bannerStreamDesc');
    const btnBackToStreams = document.getElementById('btnBackToStreams');
    const degreeSearchInput = document.getElementById('degreeSearchInput');
    const degreesGridContainer = document.getElementById('degreesGridContainer');
    const btnProceedToThankYou = document.getElementById('btnProceedToThankYou');

    // Step 4 Elements
    const thankYouCandidateName = document.getElementById('thankYouCandidateName');
    const dossierName = document.getElementById('dossierName');
    const dossierPhone = document.getElementById('dossierPhone');
    const currentDateDisplay = document.getElementById('currentDateDisplay');
    const dossierSelectedStream = document.getElementById('dossierSelectedStream');
    const dossierDegreeCount = document.getElementById('dossierDegreeCount');
    const dossierHighestSalary = document.getElementById('dossierHighestSalary');
    const dossierTargetDegrees = document.getElementById('dossierTargetDegrees');
    const btnPrintReport = document.getElementById('btnPrintReport');
    const btnExploreAgain = document.getElementById('btnExploreAgain');

    // Modal Elements - Top Colleges
    const topCollegesModal = document.getElementById('topCollegesModal');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const modalDegreeCategoryTag = document.getElementById('modalDegreeCategoryTag');
    const modalDegreeTitle = document.getElementById('modalDegreeTitle');
    const modalCollegesListContainer = document.getElementById('modalCollegesListContainer');

    // ==========================================================================
    // INITIALIZATION & CANVAS PARTICLES
    // ==========================================================================
    initGoldParticlesCanvas();
    render12thStreams();
    setupEventListeners();

    // Set today's date in dossier
    if (currentDateDisplay) {
        const today = new Date();
        currentDateDisplay.textContent = today.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }

    // ==========================================================================
    // STEP 1: AUTOMATIC INSTANT VERIFICATION
    // ==========================================================================
    btnInstantVerify.addEventListener('click', handleInstantVerification);
    
    if (authLoginForm) {
        authLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleInstantVerification();
        });
    }

    // Enter key support on phone input
    if (candidatePhoneInput) {
        candidatePhoneInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleInstantVerification();
            }
        });
    }

    function handleInstantVerification() {
        const name = candidateNameInput.value.trim();
        const phone = candidatePhoneInput.value.trim();

        if (!name) {
            showToast('Please enter your full name', 'warning');
            candidateNameInput.focus();
            return;
        }

        if (!phone || phone.length !== 10 || !/^\d{10}$/.test(phone)) {
            showToast('Please enter a valid 10-digit mobile number', 'warning');
            candidatePhoneInput.focus();
            return;
        }

        state.candidateName = name;
        state.candidatePhone = phone;

        // Visual loading transition feedback
        btnInstantVerify.disabled = true;
        btnInstantVerify.innerHTML = `<span>Verifying Details...</span> <i class="fa-solid fa-circle-notch fa-spin"></i>`;

        setTimeout(() => {
            btnInstantVerify.disabled = false;
            btnInstantVerify.innerHTML = `<span>Verify & Explore Degree Pathways</span> <i class="fa-solid fa-arrow-right"></i>`;

            // Update candidate badge in header
            headerUserName.textContent = state.candidateName;
            headerUserBadge.classList.add('active');
            btnRestartApp.style.display = 'inline-flex';

            // Update Step 2 Candidate Welcome Greeting Banner
            if (welcomeCandidateName) {
                welcomeCandidateName.textContent = state.candidateName;
            }

            showToast(`✨ Verified Successfully! Welcome, ${state.candidateName}`, 'success');

            // Slide smoothly to Step 2
            navigateToStep(2);
        }, 400);
    }

    // ==========================================================================
    // STEP 2: 12TH STREAM SELECTOR
    // ==========================================================================
    function render12thStreams() {
        if (!careerData || !careerData.streams) return;
        streamsGridContainer.innerHTML = '';

        careerData.streams.forEach(stream => {
            const card = document.createElement('div');
            card.className = 'stream-card';
            card.dataset.streamId = stream.id;

            card.innerHTML = `
                <div>
                    <div class="stream-card-header">
                        <div class="stream-icon-box">
                            <i class="fa-solid ${stream.icon}"></i>
                        </div>
                        <div class="stream-info">
                            <h3>${stream.name}</h3>
                            <span class="stream-alias">${stream.alias}</span>
                        </div>
                    </div>
                    <p class="stream-desc">${stream.description}</p>
                    <div class="subjects-chip-list">
                        ${stream.subjects.map(subj => `<span class="subject-chip">${subj}</span>`).join('')}
                    </div>
                </div>
                <div class="stream-card-footer">
                    <span><i class="fa-solid fa-graduation-cap"></i> ${stream.popularDegrees.length}+ Degree Programs</span>
                    <span>Select <i class="fa-solid fa-chevron-right"></i></span>
                </div>
            `;

            card.addEventListener('click', () => {
                document.querySelectorAll('.stream-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                state.selectedStreamId = stream.id;
                btnConfirmStream.disabled = false;
                btnConfirmStream.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });

            streamsGridContainer.appendChild(card);
        });
    }

    btnConfirmStream.addEventListener('click', () => {
        if (!state.selectedStreamId) {
            showToast('Please select your 12th standard course first', 'warning');
            return;
        }

        const selectedStream = careerData.streams.find(s => s.id === state.selectedStreamId);
        if (selectedStream) {
            bannerStreamTitle.textContent = `${selectedStream.name} (${selectedStream.alias})`;
            bannerStreamDesc.textContent = selectedStream.tagline;
            bannerStreamIcon.innerHTML = `<i class="fa-solid ${selectedStream.icon}"></i>`;
        }

        renderDegreesForStream();
        navigateToStep(3);
    });

    btnBackToStreams.addEventListener('click', () => {
        navigateToStep(2);
    });

    // ==========================================================================
    // STEP 3: DEGREES, SALARY, DURATION & TOP 5 COLLEGES MATRIX
    // ==========================================================================
    function renderDegreesForStream(filterQuery = '') {
        degreesGridContainer.innerHTML = '';
        if (!state.selectedStreamId) return;

        const allDegrees = Object.values(careerData.degrees);
        const streamDegrees = allDegrees.filter(deg => deg.streamIds.includes(state.selectedStreamId));

        const filtered = streamDegrees.filter(deg => {
            const query = filterQuery.toLowerCase();
            return deg.name.toLowerCase().includes(query) ||
                   deg.category.toLowerCase().includes(query) ||
                   deg.keyRoles.some(role => role.toLowerCase().includes(query));
        });

        if (filtered.length === 0) {
            degreesGridContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: var(--gold-bright); margin-bottom: 15px;"></i>
                    <h3>No matching degrees found for "${filterQuery}"</h3>
                    <p>Try searching for terms like "Engineering", "Medicine", "Finance", "AI", or "Law".</p>
                </div>
            `;
            return;
        }

        filtered.forEach(degree => {
            const isShortlisted = state.shortlistedDegrees.has(degree.id);
            const card = document.createElement('div');
            card.className = 'degree-card';

            card.innerHTML = `
                <div class="degree-card-top">
                    <div class="degree-meta-tags">
                        <span class="degree-category">${degree.category}</span>
                        <span class="degree-duration-badge"><i class="fa-regular fa-clock"></i> ${degree.duration}</span>
                    </div>
                    <h3 class="degree-title">${degree.name}</h3>
                    <p class="degree-overview">${degree.overview}</p>

                    <!-- Salary Projection Matrix -->
                    <div class="salary-metric-box">
                        <div class="salary-header">
                            <i class="fa-solid fa-money-bill-trend-up"></i>
                            <span>Expected Salary Package (CTC)</span>
                        </div>
                        <div class="salary-breakdown">
                            <div class="salary-item">
                                <span class="salary-lvl">Entry Level</span>
                                <span class="salary-val">${degree.salary.entry}</span>
                            </div>
                            <div class="salary-item">
                                <span class="salary-lvl">Mid (3-6 Yrs)</span>
                                <span class="salary-val">${degree.salary.mid}</span>
                            </div>
                            <div class="salary-item">
                                <span class="salary-lvl">Top Senior</span>
                                <span class="salary-val high">${degree.salary.senior}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Career Roles -->
                    <div class="key-roles-container">
                        <div class="key-roles-label">Key Job Opportunities:</div>
                        <div class="role-tags-list">
                            ${degree.keyRoles.slice(0, 4).map(role => `<span class="role-tag">${role}</span>`).join('')}
                        </div>
                    </div>
                </div>

                <!-- Footer Actions -->
                <div class="degree-card-footer">
                    <button type="button" class="btn-view-colleges" data-degree-id="${degree.id}">
                        <i class="fa-solid fa-building-columns"></i>
                        <span>View Top 5 Colleges</span>
                    </button>
                    <button type="button" class="btn-shortlist ${isShortlisted ? 'saved' : ''}" data-degree-id="${degree.id}" title="${isShortlisted ? 'Remove from shortlist' : 'Shortlist Degree'}">
                        <i class="fa-${isShortlisted ? 'solid' : 'regular'} fa-bookmark"></i>
                    </button>
                </div>
            `;

            // View Colleges Trigger
            const btnView = card.querySelector('.btn-view-colleges');
            btnView.addEventListener('click', () => {
                openTopCollegesModal(degree);
            });

            // Shortlist Trigger
            const btnShort = card.querySelector('.btn-shortlist');
            btnShort.addEventListener('click', () => {
                if (state.shortlistedDegrees.has(degree.id)) {
                    state.shortlistedDegrees.delete(degree.id);
                    btnShort.classList.remove('saved');
                    btnShort.innerHTML = '<i class="fa-regular fa-bookmark"></i>';
                    showToast(`Removed ${degree.name} from shortlist`, 'info');
                } else {
                    state.shortlistedDegrees.add(degree.id);
                    btnShort.classList.add('saved');
                    btnShort.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
                    showToast(`Shortlisted: ${degree.name}`, 'success');
                }
            });

            degreesGridContainer.appendChild(card);
        });
    }

    // Live search for degrees
    degreeSearchInput.addEventListener('input', (e) => {
        renderDegreesForStream(e.target.value.trim());
    });

    btnProceedToThankYou.addEventListener('click', () => {
        populateThankYouSummary();
        navigateToStep(4);
    });

    // ==========================================================================
    // TOP 5 COLLEGES MODAL DIALOG
    // ==========================================================================
    function openTopCollegesModal(degree) {
        if (!degree) return;

        modalDegreeCategoryTag.textContent = degree.category;
        modalDegreeTitle.textContent = degree.name;
        modalCollegesListContainer.innerHTML = '';

        degree.topColleges.forEach((college, idx) => {
            const collegeCard = document.createElement('div');
            collegeCard.className = 'college-item-card';

            collegeCard.innerHTML = `
                <div class="college-rank-badge">#${idx + 1}</div>
                <div class="college-details">
                    <div class="college-name-row">
                        <h4 class="college-name">${college.name}</h4>
                        <span class="college-nirf-tag">${college.rank}</span>
                    </div>
                    <div class="college-location">
                        <i class="fa-solid fa-location-dot"></i> ${college.location}
                    </div>
                    <p class="college-highlight">${college.highlights}</p>
                    <div class="college-footer-row">
                        <span class="college-avg-package">
                            <i class="fa-solid fa-hand-holding-dollar"></i> Avg CTC: <strong>${college.avgPackage}</strong>
                        </span>
                        <a href="${college.website}" target="_blank" rel="noopener noreferrer" class="college-link-btn">
                            <span>Official Website</span>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
            `;
            modalCollegesListContainer.appendChild(collegeCard);
        });

        topCollegesModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        topCollegesModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    btnCloseModal.addEventListener('click', closeModal);
    topCollegesModal.addEventListener('click', (e) => {
        if (e.target === topCollegesModal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && topCollegesModal.classList.contains('active')) {
            closeModal();
        }
    });

    // ==========================================================================
    // STEP 4: SUMMARY & THANK YOU SECTION
    // ==========================================================================
    function populateThankYouSummary() {
        thankYouCandidateName.textContent = state.candidateName || 'Candidate';
        dossierName.textContent = state.candidateName || 'Candidate Name';
        dossierPhone.textContent = state.candidatePhone ? `+91 ${state.candidatePhone}` : '+91 9876543210';

        const selectedStream = careerData.streams.find(s => s.id === state.selectedStreamId);
        dossierSelectedStream.textContent = selectedStream ? `${selectedStream.name}` : '-';

        const allDegrees = Object.values(careerData.degrees);
        const matchingDegrees = allDegrees.filter(deg => deg.streamIds.includes(state.selectedStreamId));
        dossierDegreeCount.textContent = `${matchingDegrees.length} Verified Degrees`;

        // Populate Target Degrees Chips
        dossierTargetDegrees.innerHTML = '';
        let targetList = matchingDegrees.filter(d => state.shortlistedDegrees.has(d.id));
        if (targetList.length === 0) {
            targetList = matchingDegrees.slice(0, 4); // default top recommendations
        }

        targetList.forEach(deg => {
            const chip = document.createElement('div');
            chip.className = 'shortlisted-chip';
            chip.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> <strong>${deg.name}</strong> (${deg.duration}) - ${deg.salary.entry}`;
            dossierTargetDegrees.appendChild(chip);
        });

        // Trigger celebratory confetti / gold shimmer
        triggerCelebrationSparks();
    }

    btnPrintReport.addEventListener('click', () => {
        window.print();
    });

    btnExploreAgain.addEventListener('click', () => {
        navigateToStep(2);
    });

    btnRestartApp.addEventListener('click', () => {
        if (confirm('Are you sure you want to restart your Career Guide session?')) {
            resetAppSession();
        }
    });

    function resetAppSession() {
        state.candidateName = '';
        state.candidatePhone = '';
        state.selectedStreamId = null;
        state.shortlistedDegrees.clear();

        candidateNameInput.value = '';
        candidatePhoneInput.value = '';

        headerUserBadge.classList.remove('active');
        btnRestartApp.style.display = 'none';

        navigateToStep(1);
        showToast('Session reset. Ready for new candidate verification.', 'info');
    }

    // ==========================================================================
    // STEP TRANSITION CONTROLLER
    // ==========================================================================
    function navigateToStep(stepNumber) {
        state.currentStep = stepNumber;

        // Hide all sections & activate target section
        Object.keys(stepSections).forEach(key => {
            const sec = stepSections[key];
            if (parseInt(key) === stepNumber) {
                sec.classList.add('active-section');
            } else {
                sec.classList.remove('active-section');
            }
        });

        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ==========================================================================
    // TOAST NOTIFICATION UTILITY
    // ==========================================================================
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = 'toast';

        let icon = 'fa-circle-info';
        if (type === 'success') icon = 'fa-circle-check';
        if (type === 'warning') icon = 'fa-triangle-exclamation';
        if (type === 'error') icon = 'fa-circle-xmark';

        toast.innerHTML = `
            <i class="fa-solid ${icon} toast-icon"></i>
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 4000);
    }

    // ==========================================================================
    // GOLD PARTICLES CANVAS BACKGROUND
    // ==========================================================================
    function initGoldParticlesCanvas() {
        const canvas = document.getElementById('goldParticlesCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = [];
        const particleCount = Math.min(width > 768 ? 45 : 20, 60);

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 2 + 0.5,
                color: `rgba(${212 + Math.floor(Math.random() * 40)}, ${175 + Math.floor(Math.random() * 40)}, 55, ${Math.random() * 0.4 + 0.15})`,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                pulse: Math.random() * 0.05
            });
        }

        function render() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#D4AF37';
                ctx.fill();
            });

            requestAnimationFrame(render);
        }

        render();
    }

    function triggerCelebrationSparks() {
        showToast('🎉 Congratulations on planning your future with Carrier Guide!', 'success');
    }

    function setupEventListeners() {
        const navBrandLogo = document.getElementById('navBrandLogo');
        if (navBrandLogo) {
            navBrandLogo.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
});
