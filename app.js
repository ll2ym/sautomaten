// S-AUTOMATEN JS Core Logic

// Machine Catalog Data
const machineData = {
    gdrink6: {
        title: "G-Drink 6",
        badge: "Getränkeautomat",
        desc: "Der G-Drink 6 zeichnet sich durch modernste Kühltechnik und eine übersichtliche Präsentation der Produkte aus. Er bietet Platz für bis zu 30 verschiedene Getränkesorten auf 6 Ebenen. Dank des integrierten Liftsystems werden die Flaschen und Dosen besonders schonend und schnell ausgegeben.",
        specs: [
            "Bis zu 30 verschiedene Getränkesorten",
            "Hocheffiziente LED-Beleuchtung für beste Sichtbarkeit",
            "Modernes Liftsystem zur produktschonenden Ausgabe",
            "Energieeffizienzklasse A++ mit Vakuum-Isolierung",
            "Ideal für mittlere Betriebe, Büros und Sportstätten"
        ],
        img: "assets/1.jpg"
    },
    gdrink9: {
        title: "G-Drink 9",
        badge: "Getränkeautomat",
        desc: "Die XL-Variante des bewährten G-Drink Modells. Konzipiert für Standorte mit hohem Bedarf wie große Kantinen, Bahnhöfe oder Schulen. Seine extra breite Glasfront ermöglicht die Präsentation einer enormen Produktvielfalt.",
        specs: [
            "Bis zu 45 verschiedene Auswahlen möglich",
            "Große Glasfront mit dreifacher Sicherheitsverglasung",
            "Schneller und leiser Produksauswurf über Liftsystem",
            "Zahlungssysteme (Bargeld & Karte) flexibel nachrüstbar",
            "Optimiertes Befüllsystem für schnellen Service"
        ],
        img: "assets/2.jpg"
    },
    "crane-shopper": {
        title: "Crane Shopper",
        badge: "Frische & Snacks",
        desc: "Der professionelle Karussellautomat ermöglicht den hygienischen Verkauf von verschiedensten Frischeprodukten wie belegten Brötchen, Salaten, Joghurts, Snacks und Getränkedosen. Die rotierenden Trommeln bieten maximale Flexibilität.",
        specs: [
            "9 rotierende Ebenen mit flexibler Fachteilung",
            "Konstante Kühlung bis zu +2°C für frische Lebensmittel",
            "Beidseitig drehbare Trommeln zur schnellen Befüllung",
            "Benutzerfreundliche Bedienung mit beleuchteten Tasten",
            "Unterstützt alle gängigen Bezahlarten"
        ],
        img: "assets/3.jpg"
    },
    gsnack8: {
        title: "G-Snack 8",
        badge: "Snack & Kombi",
        desc: "Der G-Snack 8 ist der flexible Alleskönner für Snacks, Süßwaren, Sandwiches und kühle Flaschenware. Seine extrem robuste Bauweise und das hervorragende Preis-Leistungs-Verhältnis machen ihn zur perfekten Wahl für jeden Standort.",
        specs: [
            "Bis zu 8 Spiralen pro Etage für maximale Varianz",
            "Ergonomische Entnahmehöhe mit Diebstahlschutzklappe",
            "Sicherheits-Verbundglasscheibe mit Einbruchschutz",
            "Präzise Temperatursteuerung für konstante Frische",
            "Einfach zu reinigen und extrem wartungsarm"
        ],
        img: "assets/4.jpg"
    },
    "luce-x2": {
        title: "Luce X2 Professional",
        badge: "Standgerät Kaffee",
        desc: "Die ultimative Stand-Kaffeebar für große Standorte. Bietet Kaffeespezialitäten in echter Barista-Qualität dank zwei getrennten Bohnenbehältern und Präzisions-Mahlwerken. Die Kaffeebar brüht jede Tasse frisch auf Knopfdruck.",
        specs: [
            "Zwei Kaffeebohnensorten frisch gemahlen",
            "Bis zu 24 programmierbare Kaffeespezialitäten",
            "Integrierter automatischer Becherspender (bis zu 600 Becher)",
            "Einfache, menügeführte Spül- und Reinigungsprogramme",
            "Ideales Standgerät für Kantinen, Industrie und Kliniken"
        ],
        img: "assets/5.jpg"
    },
    "cino-xs": {
        title: "Cino XS Grande Pro",
        badge: "Tischgerät Kaffee",
        desc: "Der elegante und kompakte Tisch-Kaffeevollautomat ist perfekt für mittlere Büros, Praxen, Kanzleien oder Empfangsbereiche. Trotz kompakter Maße bietet er eine reichhaltige Auswahl an feinsten Kaffeespezialitäten.",
        specs: [
            "10 Schnellanwahl-Tasten für einfache Bedienung",
            "Modernes Espressobrühsystem für exzellentes Aroma",
            "Kompaktes Design passt in jede Küchenzeile",
            "Sehr geringer Wartungs- und Reinigungsaufwand",
            "Betrieb mit Wassertank oder Festwasseranschluss"
        ],
        img: "assets/6.jpg"
    },
    rheavendors: {
        title: "Rheavendors servomat",
        badge: "Kaffeevollautomat",
        desc: "Ein hochzuverlässiges und kompaktes Tischgerät für die unkomplizierte Zubereitung von Espresso, Cappuccino, Kakao und Heißwasser für Tee. Ideal für Pausenräume und Konferenzzimmer.",
        specs: [
            "Intuitive Sensor-Bedientasten mit LED-Status",
            "Modernes Brühverfahren für dicke Crema",
            "Einstellbare Kaffeestärke und Getränkemenge",
            "Kompatibel mit allen gängigen Zahlungssystemen",
            "Robustes Gehäuse und langlebige Komponenten"
        ],
        img: "assets/7.jpg"
    },
    nayax: {
        title: "VPOS Nayax Media 4",
        badge: "Zahlungssystem",
        desc: "Das universelle bargeldlose Zahlungsterminal für alle Verkaufsautomaten. Ermöglicht Kunden einfaches und hygienisches Bezahlen mit Karte, Handy oder Smartwatch.",
        specs: [
            "Unterstützt Apple Pay, Google Pay, Visa, Mastercard, Girocard",
            "Farbiges Touchscreen-Display mit animierten Anweisungen",
            "Echtzeit-Telemetrie zur Füllstandskontrolle aus der Ferne",
            "Erhöht den Umsatz erwiesenermaßen um bis zu 30%",
            "Entspricht höchsten Sicherheitsstandards (PCI-DSS)"
        ],
        img: "assets/8.jpg"
    },
    "ict-dcm5": {
        title: "Altersnachweis ICT DCM5",
        badge: "Jugendschutz",
        desc: "Elektronischer Altersprüfer zur zuverlässigen Einhaltung des Jugendschutzes beim Verkauf altersbeschränkter Waren. Schützt Sie als Betreiber vor rechtlichen Konsequenzen.",
        specs: [
            "Prüfung aller gängigen deutschen Personalausweise",
            "Zuverlässige Prüfung von EU-Führerscheinen",
            "Schnelle Verarbeitungszeit unter 1 Sekunde",
            "Einfache Nachrüstung in bestehende Verkaufsautomaten",
            "Hohe Manipulationssicherheit durch optische Sensoren"
        ],
        img: "assets/9.jpg"
    },
    "ict-s7a": {
        title: "Banknotenleser ICT S7A",
        badge: "Bezahlsystem",
        desc: "Ein hochpräziser Geldscheinprüfer, der Banknoten zuverlässig einliest, auf Echtheit prüft und sicher verstaut. Minimiert Abweisungsraten für einen flüssigen Barzahlungsverkehr.",
        specs: [
            "Akzeptiert alle Euro-Banknoten (5 € bis 50 €)",
            "Fortschrittliche optische und magnetische Prüfsensoren",
            "Einfache Reinigung und werkzeugfreie Wartung",
            "Annahmerate über 96 % auch bei geknickten Scheinen",
            "Sichere Kasse mit Diebstahlsicherung"
        ],
        img: "assets/10.jpg"
    },
    "coin-hopper-1": {
        title: "Münzwechsler CPI Gryphon",
        badge: "Münzprüfer",
        desc: "Modernes Münzwechselsystem für präzises Wechselgeldmanagement in Ihrem Automaten. Gryphon bietet überragende Erkennung und Zuverlässigkeit.",
        specs: [
            "6 flexible Wechsellichttuben für alle Euro-Münzen",
            "Herausragende Münzerkennung und Fremdgeld-Abweisung",
            "Einfache Diagnose über das integrierte Display",
            "Schnelle Münzverarbeitung minimiert Wartezeiten",
            "MDB-Schnittstelle zur optimalen Anbindung"
        ],
        img: "assets/11.jpg"
    },
    "coin-hopper-2": {
        title: "Münzwechsler Currenza C2",
        badge: "Münzprüfer",
        desc: "Das bewährte 6-Tuben-Münzwechselsystem mit integrierter Telemetrie-Option für effizientes Bestandsmanagement an jedem Standort.",
        specs: [
            "Hocheffiziente 6-Tuben-Ausgabe zur optimalen Bevorratung",
            "Patentiertes PRP (Prio-Redundanz-System) gegen Stauungen",
            "Einfaches Programmier- und Diagnosesystem",
            "Hohe Annahmesicherheit und Zuverlässigkeit im Dauerbetrieb",
            "Kompakte Bauweise für flexiblen Einbau"
        ],
        img: "assets/12.jpg"
    },
    ersatzteile: {
        title: "Ersatzteile und mehr",
        badge: "Zubehör & Ersatzteile",
        desc: "Senden Sie uns gerne eine Anfrage zu den benötigten Teilen.",
        specs: [
            "Original-Ersatzteile & Komponenten für alle gängigen Automaten",
            "Schnelle Bearbeitung & Lieferung in ganz Hessen",
            "Schläuche, Spiralen, Tastaturen, Displays, Kühleinheiten u.v.m.",
            "Persönliche Beratung & technischer Kundensupport"
        ],
        img: "assets/13.jpg"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
        
        // Animated bars
        const bars = menuToggle.querySelectorAll(".bar");
        if (menuToggle.classList.contains("active")) {
            bars[0].style.transform = "rotate(45deg) translate(5px, 5px)";
            bars[1].style.opacity = "0";
            bars[2].style.transform = "rotate(-45deg) translate(6px, -6px)";
        } else {
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.classList.remove("active");
            const bars = menuToggle.querySelectorAll(".bar");
            bars[0].style.transform = "none";
            bars[1].style.opacity = "1";
            bars[2].style.transform = "none";
        });
    });

    // Dynamic Header Resizing & Navigation Highlighting on Scroll
    const mainHeader = document.querySelector(".main-header");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function handleScroll() {
        // Header shrink toggle
        if (mainHeader) {
            if (window.scrollY > 30) {
                mainHeader.classList.add("scrolled");
            } else {
                mainHeader.classList.remove("scrolled");
            }
        }

        // Active link highlighting
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 140)) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === current) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // 2. Catalog Filtering Logic
    const filterButtons = document.querySelectorAll(".filter-btn");
    const catalogCards = document.querySelectorAll(".catalog-card");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            catalogCards.forEach(card => {
                const cardId = card.getAttribute("data-id");
                let shouldShow = false;

                if (cardId === "ersatzteile") {
                    // Shown ONLY under Zubehör & Systeme
                    shouldShow = (filterValue === "accessory");
                } else {
                    shouldShow = (filterValue === "all" || card.getAttribute("data-category") === filterValue);
                }

                if (shouldShow) {
                    card.style.display = "block";
                    // Brief fade in animation
                    card.style.opacity = "0";
                    setTimeout(() => {
                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";
                    }, 50);
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // 3. Modal logic
    const modal = document.getElementById("detailsModal");
    const modalClose = document.getElementById("modalClose");
    const modalBackdrop = document.getElementById("modalBackdrop");
    const modalCtaBtn = document.getElementById("modalCtaBtn");

    const modalTitle = document.getElementById("modalTitle");
    const modalBadge = document.getElementById("modalBadge");
    const modalDesc = document.getElementById("modalDesc");
    const modalSpecsList = document.getElementById("modalSpecsList");

    function openModal(id) {
        const data = machineData[id];
        if (!data) return;

        if (modalTitle) modalTitle.textContent = data.title;
        if (modalBadge) modalBadge.textContent = data.badge;
        if (modalDesc) modalDesc.textContent = data.desc;
        
        // Specs list
        if (modalSpecsList) {
            modalSpecsList.innerHTML = "";
            data.specs.forEach(spec => {
                const li = document.createElement("li");
                li.textContent = spec;
                modalSpecsList.appendChild(li);
            });
        }

        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // Disable scroll behind modal
    }

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "auto"; // Re-enable scroll
    }

    if (modalCtaBtn) {
        modalCtaBtn.addEventListener("click", closeModal);
    }

    // Attach click events to catalog cards
    catalogCards.forEach(card => {
        const id = card.getAttribute("data-id");
        const btn = card.querySelector(".details-btn");
        
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            openModal(id);
        });
    });

    modalClose.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", closeModal);

    // Escape key closes modal
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    // 4. Interactive Region Map city selection sync
    const cityTags = document.querySelectorAll(".city-tag");
    const hotspots = document.querySelectorAll(".hotspot");

    function selectCity(cityId) {
        cityTags.forEach(tag => {
            if (tag.getAttribute("data-city") === cityId) {
                tag.classList.add("active");
            } else {
                tag.classList.remove("active");
            }
        });

        hotspots.forEach(hs => {
            if (hs.getAttribute("data-city") === cityId) {
                hs.classList.add("active");
            } else {
                hs.classList.remove("active");
            }
        });
    }

    cityTags.forEach(tag => {
        tag.addEventListener("mouseenter", () => {
            const city = tag.getAttribute("data-city");
            selectCity(city);
        });
    });

    hotspots.forEach(hs => {
        hs.addEventListener("mouseenter", () => {
            const city = hs.getAttribute("data-city");
            selectCity(city);
        });
    });

    // Reset highlights on mouseleave from map area
    const mapLayout = document.querySelector(".map-layout");
    if (mapLayout) {
        mapLayout.addEventListener("mouseleave", () => {
            cityTags.forEach(tag => tag.classList.remove("active"));
            hotspots.forEach(hs => hs.classList.remove("active"));
        });
    }

    // 5. Contact Form Interactive Overlay
    const contactForm = document.getElementById("contactForm");
    const successOverlay = document.getElementById("successOverlay");
    const closeSuccess = document.getElementById("closeSuccess");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            // Simulating email send
            const submitBtn = document.getElementById("submitBtn");
            const submitBtnSpan = submitBtn ? submitBtn.querySelector("span") : null;
            if (submitBtnSpan) submitBtnSpan.textContent = "Wird gesendet...";
            if (submitBtn) submitBtn.disabled = true;

            setTimeout(() => {
                if (successOverlay) successOverlay.classList.add("active");
                if (submitBtnSpan) submitBtnSpan.textContent = "Anfrage senden";
                if (submitBtn) submitBtn.disabled = false;
                contactForm.reset();
            }, 1200);
        });
    }

    if (closeSuccess) {
        closeSuccess.addEventListener("click", () => {
            if (successOverlay) successOverlay.classList.remove("active");
        });
    }

    // 6. Scroll Reveal Animation using Intersection Observer
    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Reveal once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    scrollRevealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 7. Interactive 3D Mouse Tracking Tilt for Hessen Map Tile
    const mapBox = document.querySelector('.map-img-box');
    if (mapBox) {
        const mapImg = mapBox.querySelector('img');
        let requestID = null;

        mapBox.addEventListener('mousemove', (e) => {
            const rect = mapBox.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate 18 degree max tilt follow
            const rotateX = -((y - centerY) / centerY) * 18;
            const rotateY = ((x - centerX) / centerX) * 18;
            
            if (requestID) cancelAnimationFrame(requestID);
            requestID = requestAnimationFrame(() => {
                mapImg.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04)`;
                mapImg.style.filter = `drop-shadow(${(-rotateY * 0.8).toFixed(1)}px ${(rotateX * 0.8 + 20).toFixed(1)}px 30px rgba(11, 46, 94, 0.25))`;
            });
        });
        
        mapBox.addEventListener('mouseleave', () => {
            if (requestID) cancelAnimationFrame(requestID);
            mapImg.style.transition = 'transform 0.5s ease, filter 0.5s ease';
            mapImg.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            mapImg.style.filter = 'drop-shadow(0 15px 25px rgba(11, 46, 94, 0.15))';
        });

        mapBox.addEventListener('mouseenter', () => {
            mapImg.style.transition = 'transform 0.1s ease-out, filter 0.1s ease-out';
        });
    }

    // 8. Cookie Banner Toast
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookies = document.getElementById("acceptCookies");
    const cookieDatenschutzLink = document.getElementById("cookieDatenschutzLink");

    if (cookieBanner && acceptCookies) {
        if (!localStorage.getItem("cookieConsentAccepted")) {
            setTimeout(() => {
                cookieBanner.classList.add("active");
            }, 800);
        }

        acceptCookies.addEventListener("click", () => {
            localStorage.setItem("cookieConsentAccepted", "true");
            cookieBanner.classList.remove("active");
        });
    }

    // 9. Impressum & Datenschutz Modal Logic
    const openImpressum = document.getElementById("openImpressum");
    const impressumModal = document.getElementById("impressumModal");
    const impressumClose = document.getElementById("impressumClose");
    const impressumBackdrop = document.getElementById("impressumBackdrop");

    const openDatenschutz = document.getElementById("openDatenschutz");
    const datenschutzModal = document.getElementById("datenschutzModal");
    const datenschutzClose = document.getElementById("datenschutzClose");
    const datenschutzBackdrop = document.getElementById("datenschutzBackdrop");

    function openLegalModal(targetModal) {
        if (!targetModal) return;
        targetModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeLegalModal(targetModal) {
        if (!targetModal) return;
        targetModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }

    if (openImpressum && impressumModal) {
        openImpressum.addEventListener("click", (e) => {
            e.preventDefault();
            openLegalModal(impressumModal);
        });
    }

    if (impressumClose && impressumModal) {
        impressumClose.addEventListener("click", () => closeLegalModal(impressumModal));
    }
    if (impressumBackdrop && impressumModal) {
        impressumBackdrop.addEventListener("click", () => closeLegalModal(impressumModal));
    }

    if (openDatenschutz && datenschutzModal) {
        openDatenschutz.addEventListener("click", (e) => {
            e.preventDefault();
            openLegalModal(datenschutzModal);
        });
    }

    if (cookieDatenschutzLink && datenschutzModal) {
        cookieDatenschutzLink.addEventListener("click", (e) => {
            e.preventDefault();
            openLegalModal(datenschutzModal);
        });
    }

    if (datenschutzClose && datenschutzModal) {
        datenschutzClose.addEventListener("click", () => closeLegalModal(datenschutzModal));
    }
    if (datenschutzBackdrop && datenschutzModal) {
        datenschutzBackdrop.addEventListener("click", () => closeLegalModal(datenschutzModal));
    }

    // 10. Live Opening Hours Status Indicator (Mo - Fr 8:00 - 17:00)
    const statusDot = document.getElementById("statusDot");
    const statusLabel = document.getElementById("statusLabel");

    function updateOpeningStatus() {
        if (!statusDot || !statusLabel) return;
        const now = new Date();
        const day = now.getDay(); // 0 = Sunday, 1 = Mon, ..., 5 = Fri, 6 = Sat
        const hour = now.getHours();

        // Working hours: Mon - Fri (1 to 5), 8:00 to 17:00 (8 <= hour < 17)
        const isOpen = (day >= 1 && day <= 5) && (hour >= 8 && hour < 17);

        if (isOpen) {
            statusDot.className = "status-dot open";
            statusLabel.className = "status-label open";
            statusLabel.textContent = "Jetzt Geöffnet";
        } else {
            statusDot.className = "status-dot closed";
            statusLabel.className = "status-label closed";
            statusLabel.textContent = "Geschlossen";
        }
    }

    updateOpeningStatus();
    setInterval(updateOpeningStatus, 60000);
});
