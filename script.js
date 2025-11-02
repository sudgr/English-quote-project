// Quote Database
const quoteDatabase = {
    encouragement: [
        {
            id: "enc_001",
            quote: "It is our choices that show what we truly are, far more than our abilities.",
            author: "J.K. Rowling",
            work: "Harry Potter and the Chamber of Secrets",
            year: 1998,
            context: "Dumbledore's wisdom about the power of choice over natural talent.",
            translation: "우리가 진정 무엇인지를 보여주는 것은 우리의 능력이 아니라 우리의 선택이다."
        },
        {
            id: "enc_002",
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            work: "Stanford Commencement Speech",
            year: 2005,
            context: "Advice to graduates about finding passion in their work.",
            translation: "훌륭한 일을 하는 유일한 방법은 자신이 하는 일을 사랑하는 것이다."
        },
        {
            id: "enc_003",
            quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
            author: "Winston Churchill",
            work: "Various Speeches",
            year: 1940,
            context: "Churchill's perspective on resilience during wartime.",
            translation: "성공은 최종이 아니고, 실패는 치명적이지 않다. 중요한 것은 계속할 용기다."
        },
        {
            id: "enc_004",
            quote: "Believe you can and you're halfway there.",
            author: "Theodore Roosevelt",
            work: "Various Speeches",
            year: 1900,
            context: "Roosevelt's motivational philosophy about self-belief.",
            translation: "할 수 있다고 믿으면 반은 성공한 것이다."
        },
        {
            id: "enc_005",
            quote: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt",
            work: "Various Speeches",
            year: 1950,
            context: "Roosevelt's inspiring message about dreams and determination.",
            translation: "미래는 자신의 꿈의 아름다움을 믿는 사람들에게 속한다."
        }
    ],
    celebration: [
        {
            id: "cel_001",
            quote: "Life is what happens to you while you're busy making other plans.",
            author: "John Lennon",
            work: "Beautiful Boy (Darling Boy)",
            year: 1980,
            context: "Lennon's reflection on appreciating the present moment.",
            translation: "인생은 당신이 다른 계획을 세우느라 바쁠 때 일어나는 것이다."
        },
        {
            id: "cel_002",
            quote: "The best way to predict the future is to create it.",
            author: "Peter Drucker",
            work: "Management: Tasks, Responsibilities, Practices",
            year: 1973,
            context: "Drucker's philosophy on proactive leadership and innovation.",
            translation: "미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것이다."
        },
        {
            id: "cel_003",
            quote: "Every moment is a fresh beginning.",
            author: "T.S. Eliot",
            work: "Four Quartets",
            year: 1943,
            context: "Eliot's poetic perspective on renewal and new beginnings.",
            translation: "모든 순간은 새로운 시작이다."
        },
        {
            id: "cel_004",
            quote: "Happiness is not something ready made. It comes from your own actions.",
            author: "Dalai Lama",
            work: "The Art of Happiness",
            year: 1998,
            context: "The Dalai Lama's teaching about creating happiness through action.",
            translation: "행복은 미리 만들어진 것이 아니다. 그것은 당신 자신의 행동에서 온다."
        },
        {
            id: "cel_005",
            quote: "Celebrate what you've accomplished, but raise the bar a little higher each time you succeed.",
            author: "Mia Hamm",
            work: "Go for the Goal",
            year: 1999,
            context: "Hamm's advice on continuous improvement and celebration.",
            translation: "성취한 것을 축하하되, 성공할 때마다 조금 더 높은 기준을 세워라."
        }
    ],
    determination: [
        {
            id: "det_001",
            quote: "I have not failed. I've just found 10,000 ways that won't work.",
            author: "Thomas Edison",
            work: "Various Interviews",
            year: 1910,
            context: "Edison's perspective on persistence and learning from failure.",
            translation: "나는 실패하지 않았다. 단지 작동하지 않는 10,000가지 방법을 찾았을 뿐이다."
        },
        {
            id: "det_002",
            quote: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney",
            work: "Various Interviews",
            year: 1950,
            context: "Disney's practical advice on taking action over planning.",
            translation: "시작하는 방법은 말을 멈추고 행동을 시작하는 것이다."
        },
        {
            id: "det_003",
            quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
            author: "Roy T. Bennett",
            work: "The Light in the Heart",
            year: 2016,
            context: "Bennett's encouragement to follow dreams over fears.",
            translation: "마음속의 두려움에 밀려가지 말고, 마음속의 꿈에 이끌려라."
        },
        {
            id: "det_004",
            quote: "Success is walking from failure to failure with no loss of enthusiasm.",
            author: "Winston Churchill",
            work: "Various Speeches",
            year: 1940,
            context: "Churchill's definition of success through persistence.",
            translation: "성공은 열정을 잃지 않고 실패에서 실패로 걸어가는 것이다."
        },
        {
            id: "det_005",
            quote: "The only impossible journey is the one you never begin.",
            author: "Tony Robbins",
            work: "Awaken the Giant Within",
            year: 1991,
            context: "Robbins' motivational message about starting your journey.",
            translation: "불가능한 여행은 당신이 절대 시작하지 않는 여행뿐이다."
        }
    ],
    effort: [
        {
            id: "eff_001",
            quote: "The only place where success comes before work is in the dictionary.",
            author: "Vidal Sassoon",
            work: "Various Interviews",
            year: 1980,
            context: "Sassoon's humorous take on the relationship between work and success.",
            translation: "성공이 일보다 먼저 오는 유일한 곳은 사전이다."
        },
        {
            id: "eff_002",
            quote: "There are no shortcuts to any place worth going.",
            author: "Beverly Sills",
            work: "Various Interviews",
            year: 1970,
            context: "Sills' philosophy on the value of hard work and dedication.",
            translation: "가치 있는 곳으로 가는 지름길은 없다."
        },
        {
            id: "eff_003",
            quote: "Hard work beats talent when talent doesn't work hard.",
            author: "Tim Notke",
            work: "Various Sources",
            year: 2000,
            context: "Notke's insight on the power of consistent effort over natural ability.",
            translation: "재능이 열심히 일하지 않을 때는 노력이 재능을 이긴다."
        },
        {
            id: "eff_004",
            quote: "The difference between ordinary and extraordinary is that little extra.",
            author: "Jimmy Johnson",
            work: "Various Interviews",
            year: 1990,
            context: "Johnson's perspective on what separates good from great.",
            translation: "평범함과 비범함의 차이는 그 작은 여분이다."
        },
        {
            id: "eff_005",
            quote: "Success is the sum of small efforts repeated day in and day out.",
            author: "Robert Collier",
            work: "The Secret of the Ages",
            year: 1926,
            context: "Collier's definition of success through consistent daily effort.",
            translation: "성공은 매일 반복되는 작은 노력들의 합이다."
        }
    ],
    love: [
        {
            id: "lov_001",
            quote: "Whatever our souls are made of, his and mine are the same.",
            author: "Emily Brontë",
            work: "Wuthering Heights",
            year: 1847,
            context: "Catherine's declaration of eternal connection with Heathcliff.",
            translation: "우리의 영혼이 무엇으로 만들어졌든, 그의 것과 나의 것은 같다."
        },
        {
            id: "lov_002",
            quote: "I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love.",
            author: "Mother Teresa",
            work: "A Simple Path",
            year: 1995,
            context: "Mother Teresa's profound understanding of unconditional love.",
            translation: "나는 역설을 발견했다. 아플 때까지 사랑하면 더 이상 아픔은 없고 오직 더 많은 사랑만 있을 뿐이다."
        },
        {
            id: "lov_003",
            quote: "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.",
            author: "Nicholas Sparks",
            work: "The Notebook",
            year: 1996,
            context: "Sparks' description of transformative love in his novel.",
            translation: "최고의 사랑은 영혼을 깨우고 더 많은 것을 추구하게 하며, 마음에 불을 지피고 마음을 평화롭게 하는 사랑이다."
        },
        {
            id: "lov_004",
            quote: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
            author: "Maya Angelou",
            work: "Various Works",
            year: 1990,
            context: "Angelou's powerful description of love's unstoppable nature.",
            translation: "사랑은 어떤 장벽도 인정하지 않는다. 그것은 장애물을 뛰어넘고, 울타리를 건너뛰고, 벽을 뚫고 희망으로 가득 찬 목적지에 도달한다."
        },
        {
            id: "lov_005",
            quote: "To love and be loved is to feel the sun from both sides.",
            author: "David Viscott",
            work: "How to Live with Another Person",
            year: 1974,
            context: "Viscott's beautiful metaphor for the reciprocal nature of love.",
            translation: "사랑하고 사랑받는 것은 양쪽에서 태양을 느끼는 것이다."
        }
    ],
    comfort: [
        {
            id: "com_001",
            quote: "This too shall pass.",
            author: "Various Sources",
            work: "Persian Proverb",
            year: 1000,
            context: "Ancient wisdom about the temporary nature of all things.",
            translation: "이것도 지나갈 것이다."
        },
        {
            id: "com_002",
            quote: "You are braver than you believe, stronger than you seem, and smarter than you think.",
            author: "A.A. Milne",
            work: "Winnie-the-Pooh",
            year: 1926,
            context: "Christopher Robin's comforting words to Pooh about inner strength.",
            translation: "당신은 믿는 것보다 용감하고, 보이는 것보다 강하며, 생각하는 것보다 똑똑하다."
        },
        {
            id: "com_003",
            quote: "The wound is the place where the Light enters you.",
            author: "Rumi",
            work: "The Essential Rumi",
            year: 1200,
            context: "Rumi's mystical perspective on finding light through pain.",
            translation: "상처는 빛이 당신에게 들어오는 곳이다."
        },
        {
            id: "com_004",
            quote: "When you can't find the sunshine, be the sunshine.",
            author: "Various Sources",
            work: "Inspirational Quote",
            year: 2000,
            context: "Modern wisdom about being a source of light for others.",
            translation: "햇빛을 찾을 수 없을 때, 당신이 햇빛이 되어라."
        },
        {
            id: "com_005",
            quote: "Everything will be okay in the end. If it's not okay, it's not the end.",
            author: "John Lennon",
            work: "Various Sources",
            year: 1970,
            context: "Lennon's optimistic perspective on life's challenges.",
            translation: "결국 모든 것이 괜찮을 것이다. 괜찮지 않다면 아직 끝이 아니다."
        }
    ]
};

// Application State
class QuoteApp {
    constructor() {
        // Quote and book management
        this.currentQuote = null;
        this.currentCategory = null;
        this.favoriteQuotes = this.loadFromStorage('favoriteQuotes') || [];
        this.favoriteBooks = this.loadFromStorage('favoriteBooks') || [];
        
        // Diary and book reports - both keyed by date
        this.diaryEntries = this.loadFromStorage('diaryEntries') || {};
        // bookReports structure: { [YYYY-MM-DD]: [{ title, author, rating, content, timestamp }, ...] }
        this.bookReports = this.loadFromStorage('bookReports') || {};
        // Migrate old format if exists
        const oldReports = this.loadFromStorage('bookReports');
        if (oldReports && typeof oldReports === 'object') {
            Object.keys(oldReports).forEach(key => {
                if (!key.match(/^\d{4}-\d{2}-\d{2}$/)) {
                    // Old format: title_author keys
                    const report = oldReports[key];
                    if (report && report.timestamp) {
                        const dateKey = this.formatDateKey(new Date(report.timestamp));
                        if (!this.bookReports[dateKey]) {
                            this.bookReports[dateKey] = [];
                        }
                        this.bookReports[dateKey].push(report);
                        delete this.bookReports[key];
                    }
                }
            });
            this.saveToStorage('bookReports', this.bookReports);
        }
        
        // Migrate old favorites format
        const oldFavorites = this.loadFromStorage('favorites') || [];
        if (oldFavorites.length > 0 && this.favoriteQuotes.length === 0) {
            this.favoriteQuotes = oldFavorites;
        }
        
        // Point system and story
        this.userPoints = this.loadFromStorage('userPoints') || 0;
        this.hintsCollected = this.loadFromStorage('hintsCollected') || 0;
        this.answerSubmitted = this.loadFromStorage('answerSubmitted') || false;
        this.nickname = this.loadFromStorage('nickname') || '';
        
        // Activity tracking for points
        this.activityCounts = this.loadFromStorage('activityCounts') || {
            quoteViews: 0,
            lastQuoteViewDate: null,
            consecutiveDays: 0,
            diaryWrites: 0,
            todaysQuoteWrites: 0,
            bookReports: 0,
            quizzesCompleted: 0
        };
        
        // Calendar
        this.currentCalendarDate = new Date();
        this.selectedDiaryDate = new Date();
        this.editingEntryId = null;
        this.editingReportId = null;
        this.currentBookReport = null;
        
        // Grammar
        this.grammarSuggestions = null;
        this.currentEntryImages = [];
        
        // View state
        this.currentView = 'quote'; // 'quote', 'drawer', 'favorites'
        this.drawerTab = 'diary'; // 'diary', 'bookreport'
        
        this.initializeApp();
    }

    initializeApp() {
        this.setupEventListeners();
        this.playSplash();
        this.loadUserProfile();
        this.updatePointsDisplay();
        this.generateCalendar();
        this.renderFavorites();
        this.checkAndUpdateHints();
    }

    setupEventListeners() {
        // Bookshelf - Book items
        document.querySelectorAll('.book-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.selectBook(category);
            });
        });

        // Drawer button
        const drawerBtn = document.getElementById('drawerBtn');
        if (drawerBtn) {
            drawerBtn.addEventListener('click', () => {
                this.openDrawer();
            });
        }

        // Missing poster
        const missingPoster = document.getElementById('missingPoster');
        if (missingPoster) {
            missingPoster.addEventListener('click', () => {
                this.openMissingModal();
            });
        }

        // Missing modal
        const missingModal = document.getElementById('missingModal');
        if (missingModal) {
            document.getElementById('missingModalClose').addEventListener('click', () => {
                this.closeMissingModal();
            });
            missingModal.addEventListener('click', (e) => {
                if (e.target === missingModal) {
                    this.closeMissingModal();
                }
            });
        }

        // Nickname input
        const nicknameInput = document.getElementById('nicknameInput');
        if (nicknameInput) {
            nicknameInput.value = this.nickname;
            nicknameInput.addEventListener('blur', () => {
                this.saveNickname(nicknameInput.value);
            });
            nicknameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.saveNickname(nicknameInput.value);
                    nicknameInput.blur();
            }
        });
    }

        // Favorite buttons on pages
        const quoteFavoriteBtn = document.getElementById('quoteFavoriteBtn');
        if (quoteFavoriteBtn) {
            quoteFavoriteBtn.addEventListener('click', () => {
                this.toggleQuoteFavorite();
            });
        }

        const bookFavoriteBtn = document.getElementById('bookFavoriteBtn');
        if (bookFavoriteBtn) {
            bookFavoriteBtn.addEventListener('click', () => {
                this.toggleBookFavorite();
            });
        }

        // Drawer index tabs
        document.querySelectorAll('.index-tab').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.currentTarget.dataset.tab;
                this.switchDrawerTab(tab);
            });
        });

        // Calendar navigation
        const prevMonthBtn = document.getElementById('prevMonthBtn');
        const nextMonthBtn = document.getElementById('nextMonthBtn');
        if (prevMonthBtn) prevMonthBtn.addEventListener('click', () => this.previousMonth());
        if (nextMonthBtn) nextMonthBtn.addEventListener('click', () => this.nextMonth());

        // Diary save
        const saveDiaryBtn = document.getElementById('saveDiaryBtn');
        if (saveDiaryBtn) {
            saveDiaryBtn.addEventListener('click', () => {
                this.saveDiaryEntry();
            });
        }

        // Book report save
        const saveReportBtn = document.getElementById('saveReportBtn');
        if (saveReportBtn) {
            saveReportBtn.addEventListener('click', () => {
                this.saveBookReport();
            });
        }

        // Star rating
        document.querySelectorAll('.star').forEach(star => {
            star.addEventListener('click', (e) => {
                const rating = parseInt(e.target.dataset.rating);
                this.setRating(rating);
            });
        });

        // Grammar tools
        const checkGrammarBtn = document.getElementById('checkGrammarBtn');
        const applyFixesBtn = document.getElementById('applyFixesBtn');
        if (checkGrammarBtn) {
            checkGrammarBtn.addEventListener('click', () => {
                this.checkGrammar();
            });
        }
        if (applyFixesBtn) {
            applyFixesBtn.addEventListener('click', () => {
                this.applyGrammarFixes();
            });
        }

        // Image upload
        const imageInput = document.getElementById('imageInput');
        if (imageInput) {
            imageInput.addEventListener('change', (e) => {
                this.handleImageFiles(e.target.files);
                e.target.value = '';
            });
        }

        // Quiz
        const submitQuizBtn = document.getElementById('submitQuizBtn');
        if (submitQuizBtn) {
            submitQuizBtn.addEventListener('click', () => {
                this.submitQuiz();
            });
        }

        // Answer submission
        const submitAnswerBtn = document.getElementById('submitAnswerBtn');
        if (submitAnswerBtn) {
            submitAnswerBtn.addEventListener('click', () => {
                this.submitAnswer();
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMissingModal();
                this.closeModal();
            }
        });
    }

    // Bookshelf - Book Selection
    selectBook(category) {
        // Update active book
        document.querySelectorAll('.book-item').forEach(btn => {
            btn.classList.remove('active');
        });
        const clickedBook = document.querySelector(`[data-category="${category}"]`);
        if (clickedBook) clickedBook.classList.add('active');

        if (category === 'favorites') {
            this.showFavoritesView();
        } else {
            this.currentCategory = category;
            this.showQuoteView();
            this.getRandomQuote(category);
        }
    }

    // View Management
    showQuoteView() {
        this.currentView = 'quote';
        document.getElementById('quoteBookView').style.display = 'flex';
        document.getElementById('drawerBookView').style.display = 'none';
        document.getElementById('favoritesBookView').style.display = 'none';
    }

    showDrawerView() {
        this.currentView = 'drawer';
        document.getElementById('quoteBookView').style.display = 'none';
        document.getElementById('drawerBookView').style.display = 'flex';
        document.getElementById('favoritesBookView').style.display = 'none';
        this.generateCalendar();
    }

    showFavoritesView() {
        this.currentView = 'favorites';
        document.getElementById('quoteBookView').style.display = 'none';
        document.getElementById('drawerBookView').style.display = 'none';
        document.getElementById('favoritesBookView').style.display = 'flex';
        this.renderFavorites();
    }

    openDrawer() {
        this.showDrawerView();
    }

    // Drawer Tab Management
    switchDrawerTab(tabName) {
        this.drawerTab = tabName;
        document.querySelectorAll('.index-tab').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        document.querySelectorAll('.index-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${tabName}Content`).classList.add('active');
        
        // Refresh saved items for the selected date
        if (this.selectedDiaryDate) {
            this.renderSavedDiaries();
            this.renderSavedReports();
        }
    }

    getRandomQuote(category) {
        const quotes = quoteDatabase[category];
        if (!quotes || quotes.length === 0) return;

        // Get a random quote that's different from the current one
        let randomQuote;
        do {
            randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        } while (this.currentQuote && randomQuote.id === this.currentQuote.id && quotes.length > 1);

        this.currentQuote = randomQuote;
        this.displayQuote(randomQuote);
        this.addToHistory(randomQuote);
        this.updateUI();
    }

    displayQuote(quote) {
        this.currentQuote = quote;
        
        // Left page - Quote
        const quoteContent = document.getElementById('quoteContent');
        quoteContent.innerHTML = `
            <div class="quote-text fade-in">"${quote.quote}"</div>
            <div class="quote-author">— ${quote.author}</div>
            <div class="quote-work">${quote.work} (${quote.year})</div>
            <div class="quote-translation">${quote.translation}</div>
        `;
        
        // Right page - Book info
        const bookInfoContent = document.getElementById('bookInfoContent');
        bookInfoContent.innerHTML = `
            <div class="book-info-item">
                <h4>Author</h4>
                <p>${quote.author}</p>
            </div>
            <div class="book-info-item">
                <h4>Work</h4>
                <p>${quote.work} (${quote.year})</p>
            </div>
            <div class="book-info-item">
                <h4>Context</h4>
                <p>${quote.context}</p>
            </div>
            <div class="book-info-item">
                <h4>Translation</h4>
                <p>${quote.translation}</p>
            </div>
        `;
        
        // Show favorite buttons
        const quoteFavoriteBtn = document.getElementById('quoteFavoriteBtn');
        const bookFavoriteBtn = document.getElementById('bookFavoriteBtn');
        if (quoteFavoriteBtn) {
            quoteFavoriteBtn.style.display = 'flex';
            const isQuoteFavorited = this.favoriteQuotes.some(f => f.id === quote.id);
            quoteFavoriteBtn.classList.toggle('favorited', isQuoteFavorited);
        }
        if (bookFavoriteBtn) {
            bookFavoriteBtn.style.display = 'flex';
            const isBookFavorited = this.favoriteBooks.some(b => b.work === quote.work && b.author === quote.author);
            bookFavoriteBtn.classList.toggle('favorited', isBookFavorited);
        }
        
        // Track quote view for points
        this.trackQuoteView();
        
        // Add animation
        quoteContent.classList.add('fade-in');
        setTimeout(() => quoteContent.classList.remove('fade-in'), 500);
    }

    refreshQuote() {
        if (this.currentCategory) {
            this.getRandomQuote(this.currentCategory);
        }
    }

    showLearnMore() {
        if (!this.currentQuote) return;

        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <h3>About This Quote</h3>
            <p><strong>Quote:</strong> "${this.currentQuote.quote}"</p>
            <p><strong>Author:</strong> ${this.currentQuote.author}</p>
            <p><strong>Work:</strong> ${this.currentQuote.work}</p>
            <p><strong>Year:</strong> ${this.currentQuote.year}</p>
            <p><strong>Context:</strong> ${this.currentQuote.context}</p>
            <p><strong>Korean Translation:</strong> ${this.currentQuote.translation}</p>
        `;

        document.getElementById('modalOverlay').classList.add('active');
    }

    closeModal() {
        document.getElementById('modalOverlay').classList.remove('active');
    }

    toggleQuoteFavorite() {
        if (!this.currentQuote) return;

        const favoriteBtn = document.getElementById('quoteFavoriteBtn');
        const index = this.favoriteQuotes.findIndex(f => f.id === this.currentQuote.id);

        if (index > -1) {
            this.favoriteQuotes.splice(index, 1);
            favoriteBtn.classList.remove('favorited');
        } else {
            this.favoriteQuotes.push(this.currentQuote);
            favoriteBtn.classList.add('favorited');
        }

        this.saveToStorage('favoriteQuotes', this.favoriteQuotes);
        this.renderFavorites();
    }

    toggleBookFavorite() {
        if (!this.currentQuote) return;

        const favoriteBtn = document.getElementById('bookFavoriteBtn');
        const bookInfo = {
            author: this.currentQuote.author,
            work: this.currentQuote.work,
            year: this.currentQuote.year
        };
        const index = this.favoriteBooks.findIndex(b => b.work === bookInfo.work && b.author === bookInfo.author);

        if (index > -1) {
            this.favoriteBooks.splice(index, 1);
            favoriteBtn.classList.remove('favorited');
        } else {
            this.favoriteBooks.push(bookInfo);
            favoriteBtn.classList.add('favorited');
        }

        this.saveToStorage('favoriteBooks', this.favoriteBooks);
        this.renderFavorites();
    }

    addToHistory(quote) {
        // Remove if already exists
        this.history = this.history.filter(q => q.id !== quote.id);
        
        // Add to beginning
        this.history.unshift(quote);
        
        // Keep only last 20 quotes
        this.history = this.history.slice(0, 20);
        
        this.saveToStorage('quoteHistory', this.history);
        this.updateHistoryList();
    }

    toggleDropdown(dropdownId) {
        const dropdown = document.getElementById(dropdownId);
        const isActive = dropdown.classList.contains('active');
        
        // Close all dropdowns first
        this.closeAllDropdowns();
        
        // Open the clicked dropdown if it wasn't active
        if (!isActive) {
            dropdown.classList.add('active');
            const btn = document.getElementById(dropdownId.replace('Dropdown', 'Btn'));
            btn.classList.add('active');
        }
    }

    closeAllDropdowns() {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
        document.querySelectorAll('.footer-btn').forEach(btn => {
            btn.classList.remove('active');
        });
    }

    updateHistoryList() {
        const historyList = document.getElementById('historyList');
        
        if (this.history.length === 0) {
            historyList.innerHTML = '<div class="quote-item"><div class="quote-item-text">No quotes in history yet.</div></div>';
            return;
        }

        historyList.innerHTML = this.history.map(quote => `
            <div class="quote-item" onclick="app.displayQuoteFromHistory('${quote.id}')">
                <div class="quote-item-text">"${quote.quote}"</div>
                <div class="quote-item-author">— ${quote.author}</div>
            </div>
        `).join('');
    }

    updateFavoritesList() {
        const favoritesList = document.getElementById('favoritesList');
        
        if (this.favorites.length === 0) {
            favoritesList.innerHTML = '<div class="quote-item"><div class="quote-item-text">No favorite quotes yet.</div></div>';
            return;
        }

        favoritesList.innerHTML = this.favorites.map(quote => `
            <div class="quote-item" onclick="app.displayQuoteFromFavorites('${quote.id}')">
                <div class="quote-item-text">"${quote.quote}"</div>
                <div class="quote-item-author">— ${quote.author}</div>
            </div>
        `).join('');
    }

    displayQuoteFromHistory(quoteId) {
        const quote = this.history.find(q => q.id === quoteId);
        if (quote) {
            this.currentQuote = quote;
            this.displayQuote(quote);
            this.closeAllDropdowns();
        }
    }

    displayQuoteFromFavorites(quoteId) {
        const quote = this.favorites.find(q => q.id === quoteId);
        if (quote) {
            this.currentQuote = quote;
            this.displayQuote(quote);
            this.closeAllDropdowns();
        }
    }

    clearHistory() {
        this.history = [];
        this.saveToStorage('quoteHistory', this.history);
        this.updateHistoryList();
    }

    clearFavorites() {
        this.favorites = [];
        this.saveToStorage('favorites', this.favorites);
        this.updateFavoritesList();
        
        // Update favorite button if current quote was favorited
        const favoriteBtn = document.getElementById('favoriteBtn');
        favoriteBtn.classList.remove('favorited');
        favoriteBtn.innerHTML = '<span class="btn-icon">❤️</span> Add to Favorites';
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        this.applyTheme();
        this.saveToStorage('theme', this.theme);
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        const themeIcon = document.querySelector('.theme-icon');
        themeIcon.textContent = this.theme === 'light' ? '🌞' : '🌙';
    }

    // Splash Screen
    playSplash() {
        const overlay = document.getElementById('splashOverlay');
        if (!overlay) return;
        // Prevent scroll during splash
        document.body.style.overflow = 'hidden';

        // Total animation time ~1.5s, then fade out 0.5s
        const total = 1500;
        setTimeout(() => {
            overlay.classList.add('fade-out');
            // Re-enable scroll and remove from DOM after fade
            setTimeout(() => {
                document.body.style.overflow = '';
                overlay.parentNode && overlay.parentNode.removeChild(overlay);
            }, 500);
        }, total);
    }

    updateUI() {
        // Update favorite button state
        if (this.currentQuote) {
            const favoriteBtn = document.getElementById('favoriteBtn');
            const isFavorited = this.favorites.some(fav => fav.id === this.currentQuote.id);
            
            if (isFavorited) {
                favoriteBtn.classList.add('favorited');
                favoriteBtn.innerHTML = '<span class="btn-icon">💖</span> Remove from Favorites';
        } else {
                favoriteBtn.classList.remove('favorited');
                favoriteBtn.innerHTML = '<span class="btn-icon">❤️</span> Add to Favorites';
            }
        }

        // Update lists
        this.updateHistoryList();
        this.updateFavoritesList();
    }

    // Diary Management
    generateCalendar() {
        const year = this.currentCalendarDate.getFullYear();
        const month = this.currentCalendarDate.getMonth();
        
        // Update month/year display
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        document.getElementById('calendarMonthYear').textContent = 
            `${monthNames[month]} ${year}`;

        // Generate calendar grid
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const calendarGrid = document.getElementById('calendarGrid');
        calendarGrid.innerHTML = '';

        // Day headers
        const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        dayHeaders.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });

        // Empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day other-month';
            calendarGrid.appendChild(emptyDay);
        }

        // Days of the month
        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            
            const currentDate = new Date(year, month, day);
            const dateKey = this.formatDateKey(currentDate);
            
            // Check if it's today
            if (this.isSameDate(currentDate, today)) {
                dayElement.classList.add('today');
            }
            
            // Check if there's a diary entry for this date
            const entries = this.diaryEntries[dateKey];
            if (entries && Array.isArray(entries) && entries.length > 0) {
                dayElement.classList.add('has-entry');
            }
            
            // Add click event
            dayElement.addEventListener('click', () => {
                this.selectDiaryDate(currentDate);
            });
            
            calendarGrid.appendChild(dayElement);
        }
    }

    previousMonth() {
        this.currentCalendarDate.setMonth(this.currentCalendarDate.getMonth() - 1);
        this.generateCalendar();
    }

    nextMonth() {
        this.currentCalendarDate.setMonth(this.currentCalendarDate.getMonth() + 1);
        this.generateCalendar();
    }

    selectDiaryDate(date) {
        this.selectedDiaryDate = date;
        const dateKey = this.formatDateKey(date);
        
        // Reset editing mode when selecting a new date (unless editing)
        if (!this.editingEntryId) {
            this.editingEntryId = null;
        }
        
        // Update UI - start fresh for new entry
        document.getElementById('entryDate').textContent = 
            date.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        
        // Only clear if not editing
        if (!this.editingEntryId) {
            const diaryInput = document.getElementById('diaryContentInput');
            if (diaryInput) diaryInput.value = '';
            this.renderImagePreviews([]);
            this.clearGrammarState();
        }
        
        document.getElementById('diaryEntrySection').style.display = 'block';
        
        // Show saved diary cards if exist
        this.renderSavedDiaries();
        
        // Scroll to entry section
        document.getElementById('diaryEntrySection').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    closeDiaryEntry() {
        this.selectedDiaryDate = null;
        document.getElementById('diaryEntrySection').style.display = 'none';
        const diaryInput = document.getElementById('diaryContentInput');
        if (diaryInput) diaryInput.value = '';
    }

    saveDiaryEntry() {
        if (!this.selectedDiaryDate) return;
        
        const dateKey = this.formatDateKey(this.selectedDiaryDate);
        const diaryInput = document.getElementById('diaryContentInput');
        const content = diaryInput ? diaryInput.value.trim() : '';
        const images = this.currentEntryImages || [];
        
        if (!content && images.length === 0) {
            // Don't save empty entries
            return;
        }
        
        if (!this.diaryEntries[dateKey]) {
            this.diaryEntries[dateKey] = [];
        }
        
        if (this.editingEntryId) {
            // Update existing entry
            const [entryDateKey, timestamp] = this.editingEntryId.split('_');
            const entries = this.diaryEntries[entryDateKey];
            if (entries && Array.isArray(entries)) {
                const entryIndex = entries.findIndex(e => `${entryDateKey}_${e.timestamp}` === this.editingEntryId);
                if (entryIndex !== -1) {
                    entries[entryIndex] = {
                        text: content,
                        images: [...images],
                        timestamp: entries[entryIndex].timestamp || Date.now()
                    };
                }
            }
            this.editingEntryId = null;
        } else {
            // Add new entry to array
            this.diaryEntries[dateKey].push({
                text: content,
                images: [...images],
                timestamp: Date.now()
            });
        }
        
        this.saveToStorage('diaryEntries', this.diaryEntries);
        this.generateCalendar(); // Refresh calendar to show updated entry status
        
        // Show success message
        const saveBtn = document.getElementById('saveEntryBtn');
        const originalText = saveBtn.textContent;
        saveBtn.textContent = 'Saved!';
        saveBtn.style.background = '#27ae60';
        
        setTimeout(() => {
            saveBtn.textContent = originalText;
            saveBtn.style.background = '';
            
            // Reset entry form and show saved cards
            this.resetDiaryEntry();
            this.renderSavedDiaries();
        }, 1500);
    }

    resetDiaryEntry() {
        // Clear textarea and images
        const diaryInput = document.getElementById('diaryContentInput');
        if (diaryInput) diaryInput.value = '';
        this.currentEntryImages = [];
        this.renderImagePreviews([]);
        this.clearGrammarState();
        this.editingEntryId = null; // Reset editing mode
        // Keep entry section open for new entry
    }

    renderSavedDiaries() {
        const section = document.getElementById('savedDiariesSection');
        const container = document.getElementById('diaryCardsContainer');
        
        if (!this.selectedDiaryDate) {
            section.style.display = 'none';
            return;
        }
        
        const dateKey = this.formatDateKey(this.selectedDiaryDate);
        const entries = this.diaryEntries[dateKey] || [];
        
        if (!Array.isArray(entries) || entries.length === 0) {
            section.style.display = 'none';
            return;
        }
        
        section.style.display = 'block';
        
        const dateStr = this.selectedDiaryDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Sort by timestamp (newest first)
        const sortedEntries = [...entries].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        
        container.innerHTML = sortedEntries.map((entry, idx) => {
            const entryId = `${dateKey}_${entry.timestamp || idx}`;
            const timeStr = entry.timestamp ? new Date(entry.timestamp).toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
            }) : '';
        
        return `
                <div class="diary-card">
                    <div class="diary-card-header">
                        <div class="diary-card-date">${timeStr || `Entry ${idx + 1}`}</div>
                        <div class="diary-card-actions">
                            <button class="diary-card-btn" onclick="app.editSavedEntry('${entryId}')">Edit</button>
                            <button class="diary-card-btn delete" onclick="app.deleteSavedEntry('${entryId}')">Delete</button>
                    </div>
                </div>
                    ${entry.todaysQuote ? `<div class="diary-card-quote" style="font-style: italic; color: var(--text-secondary); margin-bottom: 0.5rem; padding: 0.5rem; background: rgba(86, 130, 3, 0.05); border-radius: 6px; border-left: 3px solid var(--accent-primary);">"${entry.todaysQuote}"</div>` : ''}
                    ${entry.text ? `<div class="diary-card-content">${entry.text.replace(/\n/g, '<br>')}</div>` : ''}
                    ${entry.images && entry.images.length > 0 ? `
                        <div class="diary-card-images">
                            ${entry.images.map((img, imgIdx) => `<img src="${img}" alt="Diary image ${imgIdx+1}" onclick="app.viewFullImage('${img}')">`).join('')}
                    </div>
                    ` : ''}
            </div>
        `;
        }).join('');
        
        // Scroll to saved diaries section
        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    editSavedEntry(entryId) {
        const [dateKey, timestamp] = entryId.split('_');
        const entries = this.diaryEntries[dateKey];
        if (!entries || !Array.isArray(entries)) return;
        
        const entry = entries.find(e => `${dateKey}_${e.timestamp}` === entryId || entries.indexOf(e).toString() === timestamp);
        if (!entry) return;
        
        // Set editing mode
        this.editingEntryId = entryId;
        
        const date = new Date(dateKey);
        this.selectDiaryDate(date);
        const diaryInput = document.getElementById('diaryContentInput');
        const todaysQuoteInput = document.getElementById('todaysQuoteInput');
        if (diaryInput) diaryInput.value = entry.text || '';
        if (todaysQuoteInput) todaysQuoteInput.value = entry.todaysQuote || '';
        this.renderImagePreviews(entry.images || []);
        this.renderSavedDiaries(); // Refresh cards after editing
    }

    deleteSavedEntry(entryId) {
        if (!confirm('Are you sure you want to delete this entry?')) return;
        
        const [dateKey, timestamp] = entryId.split('_');
        const entries = this.diaryEntries[dateKey];
        if (!entries || !Array.isArray(entries)) return;
        
        const entryIndex = entries.findIndex(e => `${dateKey}_${e.timestamp}` === entryId || entries.indexOf(e).toString() === timestamp);
        if (entryIndex === -1) return;
        
        entries.splice(entryIndex, 1);
        
        // Remove date key if no entries left
        if (entries.length === 0) {
            delete this.diaryEntries[dateKey];
        }
        
        this.saveToStorage('diaryEntries', this.diaryEntries);
        this.generateCalendar();
        this.renderSavedDiaries();
    }

    viewFullImage(imageSrc) {
        // Create modal to view full image
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.style.zIndex = '2000';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 90vw; max-height: 90vh; padding: 0;">
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
                <img src="${imageSrc}" style="width: 100%; height: auto; display: block; border-radius: 12px;">
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    deleteDiaryEntry() {
        if (!this.selectedDiaryDate) return;
        
        const dateKey = this.formatDateKey(this.selectedDiaryDate);
        delete this.diaryEntries[dateKey];
        
        this.saveToStorage('diaryEntries', this.diaryEntries);
        this.generateCalendar(); // Refresh calendar
        this.closeDiaryEntry();
    }

    // Images
    handleImageFiles(fileList) {
        if (!this.selectedDiaryDate) return;
        const files = Array.from(fileList || []);
        if (files.length === 0) return;
        const dateKey = this.formatDateKey(this.selectedDiaryDate);
        const diaryInput = document.getElementById('diaryContentInput');
        const entry = this.diaryEntries[dateKey] || { text: diaryInput ? diaryInput.value.trim() : '', images: [] };
        const existing = entry.images || [];
        const readers = files.map(file => new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(file);
        }));
        Promise.all(readers).then(base64s => {
            const updated = [...existing, ...base64s];
            this.currentEntryImages = updated;
            this.renderImagePreviews(updated);
        });
    }

    renderImagePreviews(images) {
        this.currentEntryImages = images;
        const grid = document.getElementById('imagePreviewGrid');
        grid.innerHTML = (images || []).map((src, idx) => `
            <div class="image-chip">
                <img src="${src}" alt="diary image ${idx+1}">
                <button class="image-remove" onclick="app.removeImage(${idx})">×</button>
            </div>
        `).join('');
    }

    removeImage(index) {
        if (this.currentEntryImages && index >= 0) {
            this.currentEntryImages.splice(index, 1);
            this.renderImagePreviews(this.currentEntryImages);
        }
    }

    // Grammar
    clearGrammarState() {
        this.grammarSuggestions = null;
        const applyBtn = document.getElementById('applyFixesBtn');
        if (applyBtn) applyBtn.disabled = true;
    }

    async checkGrammar() {
        const textarea = document.getElementById('diaryContentInput');
        const text = textarea.value;
        if (!text) return;
        try {
            const params = new URLSearchParams();
            params.append('text', text);
            params.append('language', 'en-US');
            const res = await fetch('https://api.languagetool.org/v2/check', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: params
            });
            const data = await res.json();
            this.grammarSuggestions = data.matches || [];
            this.highlightSuggestions(text, this.grammarSuggestions);
            const applyBtn = document.getElementById('applyFixesBtn');
            applyBtn.disabled = this.grammarSuggestions.length === 0;
        } catch (e) {
            console.error('Grammar check failed', e);
        }
    }

    highlightSuggestions(text, matches) {
        // simple underline in textarea not supported; no-op, but could show count
        if (!matches || matches.length === 0) return;
        // Provide a brief toast via save button text
        const btn = document.getElementById('checkGrammarBtn');
        const original = btn.textContent;
        btn.textContent = `Found ${matches.length}`;
        setTimeout(() => btn.textContent = original, 1500);
    }

    applyGrammarFixes() {
        if (!this.grammarSuggestions || this.grammarSuggestions.length === 0) return;
        const textarea = document.getElementById('diaryContentInput');
        let current = textarea.value;
        // Apply from end to start to keep indices valid
        const ordered = [...this.grammarSuggestions].sort((a,b) => (b.offset - a.offset));
        for (const m of ordered) {
            const repl = (m.replacements && m.replacements[0] && m.replacements[0].value) || null;
            if (!repl) continue;
            const start = m.offset;
            const end = m.offset + m.length;
            current = current.slice(0, start) + repl + current.slice(end);
        }
        textarea.value = current;
        this.clearGrammarState();
    }

    formatDateKey(date) {
        return date.toISOString().split('T')[0]; // YYYY-MM-DD format
    }

    isSameDate(date1, date2) {
        return date1.getFullYear() === date2.getFullYear() &&
               date1.getMonth() === date2.getMonth() &&
               date1.getDate() === date2.getDate();
    }

    // LocalStorage helpers
    saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    loadFromStorage(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return null;
        }
    }

    // Point System Methods
    loadUserProfile() {
        const nicknameInput = document.getElementById('nicknameInput');
        if (nicknameInput && this.nickname) {
            nicknameInput.value = this.nickname;
        }
        this.updatePointsDisplay();
    }

    saveNickname(nickname) {
        this.nickname = nickname.trim();
        this.saveToStorage('nickname', this.nickname);
    }

    updatePointsDisplay() {
        const pointsValue = document.getElementById('pointsValue');
        const modalPointsValue = document.getElementById('modalPointsValue');
        if (pointsValue) pointsValue.textContent = this.userPoints;
        if (modalPointsValue) modalPointsValue.textContent = this.userPoints;
        
        // Update points needed for next hint
        const pointsNeeded = document.getElementById('pointsNeeded');
        if (pointsNeeded) {
            const nextHintThreshold = (this.hintsCollected + 1) * 10;
            const needed = Math.max(0, nextHintThreshold - this.userPoints);
            pointsNeeded.textContent = needed;
        }
    }

    addPoints(amount) {
        this.userPoints += amount;
        this.saveToStorage('userPoints', this.userPoints);
        this.updatePointsDisplay();
        this.checkAndUpdateHints();
    }

    checkAndUpdateHints() {
        const hintsToUnlock = Math.floor(this.userPoints / 10);
        if (hintsToUnlock > this.hintsCollected && hintsToUnlock <= 4) {
            this.hintsCollected = hintsToUnlock;
            this.saveToStorage('hintsCollected', this.hintsCollected);
            this.updateHintsDisplay();
            
            // Show notification
            if (this.hintsCollected > 0) {
                this.showHintNotification();
            }
        }
        this.updateHintsDisplay();
        this.updateAnswerSection();
    }

    updateHintsDisplay() {
        const hintsDisplay = document.getElementById('hintsDisplay');
        if (!hintsDisplay) return;
        
        const hints = this.getHints();
        hintsDisplay.innerHTML = hints.map((hint, index) => {
            const isUnlocked = index < this.hintsCollected;
            return `
                <div class="hint-item ${isUnlocked ? 'unlocked' : 'locked'}">
                    ${isUnlocked ? hint : `Hint ${index + 1} 🔒`}
                </div>
            `;
        }).join('');
    }

    getHints() {
        // These would be the actual hints for the character
        // For now, using placeholder hints
        return [
            "This character is known for their wit and intelligence.",
            "They appear in a classic 19th century novel.",
            "The author's initials are J.A.",
            "They are famous for their pride."
        ];
    }

    updateAnswerSection() {
        const answerSection = document.getElementById('answerSection');
        if (!answerSection) return;
        
        if (this.hintsCollected >= 4) {
            answerSection.style.display = 'block';
        } else {
            answerSection.style.display = 'none';
        }
    }

    showHintNotification() {
        // Simple notification for hint unlocked
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--gradient-primary);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            z-index: 3000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = `🎉 Hint ${this.hintsCollected} unlocked!`;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Track activities for points
    trackQuoteView() {
        const today = new Date().toDateString();
        const lastDate = this.activityCounts.lastQuoteViewDate;
        
        if (lastDate === today) {
            // Already viewed today
            return;
        } else if (lastDate && new Date(lastDate).getDate() === new Date(today).getDate() - 1) {
            // Consecutive day
            this.activityCounts.consecutiveDays += 1;
        } else {
            // Reset streak
            this.activityCounts.consecutiveDays = 1;
        }
        
        this.activityCounts.lastQuoteViewDate = today;
        this.activityCounts.quoteViews += 1;
        
        // Award point for 5 consecutive days
        if (this.activityCounts.consecutiveDays >= 5 && this.activityCounts.consecutiveDays % 5 === 0) {
            this.addPoints(1);
        }
        
        this.saveToStorage('activityCounts', this.activityCounts);
    }

    trackTodaysQuoteWrite() {
        this.activityCounts.todaysQuoteWrites += 1;
        
        // Award point for 5 writes
        if (this.activityCounts.todaysQuoteWrites >= 5 && this.activityCounts.todaysQuoteWrites % 5 === 0) {
            this.addPoints(1);
        }
        
        this.saveToStorage('activityCounts', this.activityCounts);
    }

    trackDiaryWrite() {
        this.activityCounts.diaryWrites += 1;
        
        // Award 2 points for 10 writes
        if (this.activityCounts.diaryWrites >= 10 && this.activityCounts.diaryWrites % 10 === 0) {
            this.addPoints(2);
        }
        
        this.saveToStorage('activityCounts', this.activityCounts);
    }

    trackBookReport() {
        this.activityCounts.bookReports += 1;
        
        // Award 2 points for 5 reports
        if (this.activityCounts.bookReports >= 5 && this.activityCounts.bookReports % 5 === 0) {
            this.addPoints(2);
        }
        
        this.saveToStorage('activityCounts', this.activityCounts);
    }

    trackQuizComplete(allCorrect) {
        if (allCorrect) {
            this.activityCounts.quizzesCompleted += 1;
            this.addPoints(3);
            this.saveToStorage('activityCounts', this.activityCounts);
        }
    }

    // Missing Modal
    openMissingModal() {
        const modal = document.getElementById('missingModal');
        if (modal) {
            this.updateHintsDisplay();
            this.updateAnswerSection();
            modal.classList.add('active');
        }
    }

    closeMissingModal() {
        const modal = document.getElementById('missingModal');
        if (modal) {
            modal.classList.remove('active');
        }
    }

    submitAnswer() {
        const answerInput = document.getElementById('answerInput');
        const answerResult = document.getElementById('answerResult');
        
        if (!answerInput || !answerResult) return;
        
        const userAnswer = answerInput.value.trim().toLowerCase();
        // This would be the actual answer - placeholder for now
        const correctAnswer = "pride and prejudice"; // Example
        
        if (userAnswer === correctAnswer) {
            answerResult.className = 'answer-result correct';
            answerResult.textContent = '🎉 Correct! You found their home!';
            answerResult.style.display = 'block';
            this.answerSubmitted = true;
            this.saveToStorage('answerSubmitted', true);
        } else {
            answerResult.className = 'answer-result incorrect';
            answerResult.textContent = '❌ Not quite right. Try again!';
            answerResult.style.display = 'block';
        }
    }

    // Favorites rendering
    renderFavorites() {
        const quotesList = document.getElementById('favoriteQuotesList');
        const booksList = document.getElementById('favoriteBooksList');
        
        if (quotesList) {
            if (this.favoriteQuotes.length === 0) {
                quotesList.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No favorite quotes yet.</p>';
            } else {
                quotesList.innerHTML = this.favoriteQuotes.map(quote => `
                    <div class="favorite-item">
                        <div class="favorite-item-text">"${quote.quote}"</div>
                        <div class="favorite-item-author">— ${quote.author}</div>
                        <div class="favorite-item-book">${quote.work}</div>
                    </div>
                `).join('');
            }
        }
        
        if (booksList) {
            if (this.favoriteBooks.length === 0) {
                booksList.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No favorite books yet.</p>';
            } else {
                booksList.innerHTML = this.favoriteBooks.map(book => `
                    <div class="favorite-item">
                        <div class="favorite-item-text" style="font-weight: 600;">${book.work}</div>
                        <div class="favorite-item-author">by ${book.author}</div>
                        ${book.year ? `<div class="favorite-item-book">${book.year}</div>` : ''}
                    </div>
                `).join('');
            }
        }
    }

    // Calendar methods (update existing)
    generateCalendar() {
        const calendarContainer = document.getElementById('calendarContainer');
        if (!calendarContainer) return;
        
        const year = this.currentCalendarDate.getFullYear();
        const month = this.currentCalendarDate.getMonth();
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDay = firstDay.getDay();
        
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                          'July', 'August', 'September', 'October', 'November', 'December'];
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        const monthYear = document.querySelector('.calendar-month-year');
        if (monthYear) {
            monthYear.textContent = `${monthNames[month]} ${year}`;
        }
        
        let calendarHTML = `
            <div class="calendar-header">
                <button class="calendar-nav-btn" id="prevMonthBtn">‹</button>
                <div class="calendar-month-year">${monthNames[month]} ${year}</div>
                <button class="calendar-nav-btn" id="nextMonthBtn">›</button>
            </div>
            <div class="calendar-grid">
        `;
        
        // Day headers
        dayNames.forEach(day => {
            calendarHTML += `<div class="calendar-day-header">${day}</div>`;
        });
        
        // Empty cells for days before month starts
        for (let i = 0; i < startDay; i++) {
            calendarHTML += `<div class="calendar-day other-month"></div>`;
        }
        
        // Days of the month
        const today = new Date();
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateKey = this.formatDateKey(date);
            const hasDiaryEntry = this.diaryEntries[dateKey] && this.diaryEntries[dateKey].length > 0;
            const hasBookReport = this.bookReports[dateKey] && this.bookReports[dateKey].length > 0;
            const isToday = this.isSameDate(date, today);
            
            let classes = 'calendar-day';
            if (isToday) classes += ' today';
            if (hasDiaryEntry) classes += ' has-entry';
            if (hasBookReport) classes += ' has-report';
            
            calendarHTML += `
                <div class="${classes}" data-date="${dateKey}" onclick="app.selectDate(new Date('${date.toISOString()}'))">
                    ${day}
                </div>
            `;
        }
        
        calendarHTML += '</div>';
        calendarContainer.innerHTML = calendarHTML;
        
        // Re-attach event listeners
        const prevBtn = document.getElementById('prevMonthBtn');
        const nextBtn = document.getElementById('nextMonthBtn');
        if (prevBtn) prevBtn.addEventListener('click', () => this.previousMonth());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextMonth());
    }

    previousMonth() {
        this.currentCalendarDate.setMonth(this.currentCalendarDate.getMonth() - 1);
        this.generateCalendar();
    }

    nextMonth() {
        this.currentCalendarDate.setMonth(this.currentCalendarDate.getMonth() + 1);
        this.generateCalendar();
    }

    selectDate(date) {
        this.selectedDiaryDate = new Date(date);
        const dateKey = this.formatDateKey(this.selectedDiaryDate);
        
        // Update date display for both tabs
        const dateDisplay = document.getElementById('diaryDateDisplay');
        const reportDateDisplay = document.getElementById('reportDateDisplay');
        const dateStr = this.selectedDiaryDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });
        if (dateDisplay) dateDisplay.textContent = dateStr;
        if (reportDateDisplay) reportDateDisplay.textContent = dateStr;
        
        // Load diary entry if any
        const entries = this.diaryEntries[dateKey];
        const todaysQuoteInput = document.getElementById('todaysQuoteInput');
        const diaryContentInput = document.getElementById('diaryContentInput');
        
        if (entries && entries.length > 0) {
            const latestEntry = entries[entries.length - 1];
            if (todaysQuoteInput) todaysQuoteInput.value = latestEntry.todaysQuote || '';
            if (diaryContentInput) diaryContentInput.value = latestEntry.text || '';
            if (latestEntry.images) {
                this.currentEntryImages = latestEntry.images;
                this.renderImagePreviews(latestEntry.images);
            }
        } else {
            if (todaysQuoteInput) todaysQuoteInput.value = '';
            if (diaryContentInput) diaryContentInput.value = '';
            this.currentEntryImages = [];
            this.renderImagePreviews([]);
        }
        
        // Load book report if any
        const reports = this.bookReports[dateKey];
        const titleInput = document.getElementById('bookTitleInput');
        const authorInput = document.getElementById('bookAuthorInput');
        const contentInput = document.getElementById('reportContentInput');
        
        if (reports && reports.length > 0) {
            const latestReport = reports[reports.length - 1];
            if (titleInput) titleInput.value = latestReport.title || '';
            if (authorInput) authorInput.value = latestReport.author || '';
            if (contentInput) contentInput.value = latestReport.content || '';
            this.setRating(latestReport.rating || 0);
            this.editingReportId = `${dateKey}_${latestReport.timestamp}`;
        } else {
            if (titleInput) titleInput.value = '';
            if (authorInput) authorInput.value = '';
            if (contentInput) contentInput.value = '';
            this.setRating(0);
            this.editingReportId = null;
        }
        
        this.editingEntryId = null;
        this.renderSavedDiaries();
        this.renderSavedReports();
    }

    // Alias for backward compatibility
    selectDiaryDate(date) {
        this.selectDate(date);
    }

    renderSavedReports() {
        const section = document.getElementById('savedReportsSection');
        const container = document.getElementById('reportCardsContainer');
        
        if (!section || !container) return;
        
        if (!this.selectedDiaryDate) {
            section.style.display = 'none';
            return;
        }
        
        const dateKey = this.formatDateKey(this.selectedDiaryDate);
        const reports = this.bookReports[dateKey] || [];
        
        if (!Array.isArray(reports) || reports.length === 0) {
            section.style.display = 'none';
            return;
        }
        
        section.style.display = 'block';
        
        // Sort by timestamp (newest first)
        const sortedReports = [...reports].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        
        container.innerHTML = sortedReports.map((report, idx) => {
            const reportId = `${dateKey}_${report.timestamp || idx}`;
            const timeStr = report.timestamp ? new Date(report.timestamp).toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
            }) : '';
            
            const stars = Array.from({ length: 5 }, (_, i) => 
                i < (report.rating || 0) ? '★' : '☆'
            ).join('');
            
            return `
                <div class="report-card">
                    <div class="report-card-header">
                        <div>
                            <div class="report-card-title">${report.title || 'Untitled'}</div>
                            <div class="report-card-author">by ${report.author || 'Unknown'}</div>
                        </div>
                        <div class="report-card-actions">
                            <button class="report-card-btn" onclick="app.editSavedReport('${reportId}')">Edit</button>
                            <button class="report-card-btn delete" onclick="app.deleteSavedReport('${reportId}')">Delete</button>
                        </div>
                    </div>
                    <div class="report-card-rating">${stars}</div>
                    ${report.content ? `<div class="report-card-content">${report.content.replace(/\n/g, '<br>')}</div>` : ''}
                </div>
            `;
        }).join('');
        
        // Scroll to saved reports section
        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    editSavedReport(reportId) {
        const [dateKey, timestamp] = reportId.split('_');
        const reports = this.bookReports[dateKey];
        if (!reports || !Array.isArray(reports)) return;
        
        const report = reports.find(r => `${dateKey}_${r.timestamp}` === reportId || reports.indexOf(r).toString() === timestamp);
        if (!report) return;
        
        // Set editing mode
        this.editingReportId = reportId;
        
        const date = new Date(dateKey);
        this.selectDate(date);
        
        // Switch to book report tab
        this.switchDrawerTab('bookreport');
        
        this.renderSavedReports(); // Refresh cards after editing
    }

    deleteSavedReport(reportId) {
        if (!confirm('Are you sure you want to delete this report?')) return;
        
        const [dateKey, timestamp] = reportId.split('_');
        const reports = this.bookReports[dateKey];
        if (!reports || !Array.isArray(reports)) return;
        
        const reportIndex = reports.findIndex(r => `${dateKey}_${r.timestamp}` === reportId || reports.indexOf(r).toString() === timestamp);
        if (reportIndex === -1) return;
        
        reports.splice(reportIndex, 1);
        
        // Remove date key if no reports left
        if (reports.length === 0) {
            delete this.bookReports[dateKey];
        }
        
        this.saveToStorage('bookReports', this.bookReports);
        this.generateCalendar();
        this.renderSavedReports();
    }

    // Diary save with point tracking
    saveDiaryEntry() {
        if (!this.selectedDiaryDate) {
            alert('Please select a date first.');
            return;
        }
        
        const dateKey = this.formatDateKey(this.selectedDiaryDate);
        const todaysQuoteInput = document.getElementById('todaysQuoteInput');
        const diaryContentInput = document.getElementById('diaryContentInput');
        
        if (!todaysQuoteInput || !diaryContentInput) return;
        
        const todaysQuote = todaysQuoteInput.value.trim();
        const diaryContent = diaryContentInput.value.trim();
        
        if (!diaryContent && !todaysQuote) {
            alert('Please write something in your diary.');
            return;
        }
        
        if (!this.diaryEntries[dateKey]) {
            this.diaryEntries[dateKey] = [];
        }
        
        const entry = {
            text: diaryContent,
            todaysQuote: todaysQuote,
            images: [...this.currentEntryImages],
            timestamp: Date.now()
        };
        
        if (this.editingEntryId) {
            // Update existing entry
            const [entryDateKey, timestamp] = this.editingEntryId.split('_');
            const entries = this.diaryEntries[entryDateKey];
            if (entries && Array.isArray(entries)) {
                const index = entries.findIndex(e => `${entryDateKey}_${e.timestamp}` === this.editingEntryId);
                if (index > -1) {
                    entries[index] = entry;
                }
            }
        } else {
            // Add new entry
            this.diaryEntries[dateKey].push(entry);
        }
        
        this.saveToStorage('diaryEntries', this.diaryEntries);
        
        // Track for points
        if (todaysQuote) {
            this.trackTodaysQuoteWrite();
        }
        if (diaryContent) {
            this.trackDiaryWrite();
        }
        
        // Reset and refresh
        this.resetDiaryEntry();
        this.generateCalendar();
        this.renderSavedDiaries();
    }

    resetDiaryEntry() {
        const todaysQuoteInput = document.getElementById('todaysQuoteInput');
        const diaryContentInput = document.getElementById('diaryContentInput');
        if (todaysQuoteInput) todaysQuoteInput.value = '';
        if (diaryContentInput) diaryContentInput.value = '';
        this.currentEntryImages = [];
        this.renderImagePreviews([]);
        this.clearGrammarState();
        this.editingEntryId = null;
    }

    // Book Report methods
    setRating(rating) {
        document.querySelectorAll('.star').forEach((star, index) => {
            if (index < rating) {
                star.classList.add('filled');
                star.textContent = '★';
            } else {
                star.classList.remove('filled');
                star.textContent = '☆';
            }
        });
        this.currentRating = rating;
    }

    saveBookReport() {
        if (!this.selectedDiaryDate) {
            alert('Please select a date first.');
            return;
        }
        
        const dateKey = this.formatDateKey(this.selectedDiaryDate);
        const titleInput = document.getElementById('bookTitleInput');
        const authorInput = document.getElementById('bookAuthorInput');
        const contentInput = document.getElementById('reportContentInput');
        
        if (!titleInput || !authorInput || !contentInput) return;
        
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const content = contentInput.value.trim();
        
        if (!title || !author) {
            alert('Please enter book title and author.');
            return;
        }
        
        if (!this.bookReports[dateKey]) {
            this.bookReports[dateKey] = [];
        }
        
        const report = {
            title: title,
            author: author,
            rating: this.currentRating || 0,
            content: content,
            timestamp: Date.now()
        };
        
        if (this.editingReportId) {
            // Update existing report
            const [reportDateKey, timestamp] = this.editingReportId.split('_');
            const reports = this.bookReports[reportDateKey];
            if (reports && Array.isArray(reports)) {
                const index = reports.findIndex(r => `${reportDateKey}_${r.timestamp}` === this.editingReportId);
                if (index > -1) {
                    reports[index] = report;
                }
            }
        } else {
            // Add new report
            this.bookReports[dateKey].push(report);
        }
        
        this.saveToStorage('bookReports', this.bookReports);
        
        // Track for points
        this.trackBookReport();
        
        // Show quiz section
        this.showQuizForBook(title, author);
        
        // Reset and refresh
        this.resetBookReport();
        this.generateCalendar();
        this.renderSavedReports();
    }

    resetBookReport() {
        const titleInput = document.getElementById('bookTitleInput');
        const authorInput = document.getElementById('bookAuthorInput');
        const contentInput = document.getElementById('reportContentInput');
        if (titleInput) titleInput.value = '';
        if (authorInput) authorInput.value = '';
        if (contentInput) contentInput.value = '';
        this.setRating(0);
        this.editingReportId = null;
    }

    showQuizForBook(title, author) {
        const quizSection = document.getElementById('quizSection');
        if (!quizSection) return;
        
        quizSection.style.display = 'block';
        
        // Generate quiz questions (placeholder - would be dynamic based on book)
        const questions = [
            {
                question: `What is the main theme of "${title}"?`,
                options: ['Love', 'Adventure', 'Mystery', 'Friendship']
            },
            {
                question: `Who is the protagonist of "${title}"?`,
                options: ['The narrator', 'A young hero', 'An elderly sage', 'A mysterious figure']
            },
            {
                question: `What genre does "${title}" belong to?`,
                options: ['Fiction', 'Non-fiction', 'Poetry', 'Drama']
            }
        ];
        
        const quizQuestions = document.getElementById('quizQuestions');
        if (quizQuestions) {
            quizQuestions.innerHTML = questions.map((q, qIndex) => `
                <div class="quiz-question" data-question="${qIndex}">
                    <label class="quiz-question-label">${q.question}</label>
                    <div class="quiz-options">
                        ${q.options.map((opt, optIndex) => `
                            <div class="quiz-option" data-option="${optIndex}">
                                ${opt}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
            
            // Add click handlers
            quizQuestions.querySelectorAll('.quiz-option').forEach(opt => {
                opt.addEventListener('click', function() {
                    const question = this.closest('.quiz-question');
                    question.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
        }
        
        this.currentQuizAnswers = {};
    }

    submitQuiz() {
        const questions = document.querySelectorAll('.quiz-question');
        let allCorrect = true;
        let correctCount = 0;
        
        questions.forEach((q, index) => {
            const selected = q.querySelector('.quiz-option.selected');
            if (!selected) {
                allCorrect = false;
                return;
            }
            // For now, assume first option is correct (would be dynamic in real implementation)
            if (selected.dataset.option === '0') {
                correctCount++;
            } else {
                allCorrect = false;
            }
        });
        
        const quizResult = document.getElementById('quizResult');
        if (quizResult) {
            if (allCorrect && questions.length === 3) {
                quizResult.className = 'quiz-result success';
                quizResult.textContent = `🎉 Perfect! You got all 3 questions correct! (+3 points)`;
                quizResult.style.display = 'block';
                this.trackQuizComplete(true);
            } else {
                quizResult.className = 'quiz-result failed';
                quizResult.textContent = `You got ${correctCount} out of ${questions.length} correct. Try again!`;
                quizResult.style.display = 'block';
            }
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new QuoteApp();
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.footer-section')) {
        app.closeAllDropdowns();
    }
});