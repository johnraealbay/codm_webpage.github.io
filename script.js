(function() {
  function setNavbarActiveLink(sectionId) {
    document.querySelectorAll(".navbar-cod .nav-link[href^='#']").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${sectionId}`);
    });
  }

  function scrollToSection(target) {
    const navbar = document.querySelector(".navbar-cod");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const startTop = window.pageYOffset;
    const targetTop = target.getBoundingClientRect().top + startTop - navbarHeight;
    const distance = targetTop - startTop;
    const duration = 850;
    const startTime = performance.now();

    function easeInOutCubic(progress) {
      return progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    }

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startTop + distance * easeInOutCubic(progress));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  document.addEventListener("click", event => {
    const link = event.target.closest("a[href^='#']");

    if (!link) return;

    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();
    event.stopPropagation();
    scrollToSection(target);
    history.pushState(null, "", `#${target.id}`);
    setNavbarActiveLink(target.id);

    const navbarCollapse = document.querySelector(".navbar-collapse.show");
    if (navbarCollapse && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    }
  }, true);

  const categories = [
    { name: "SMG" },
    { name: "Assault Rifle" },
    { name: "Sniper" },
    { name: "Shotgun" },
    { name: "Marksman" },
    { name: "LMG" },
    { name: "Pistols" }
  ];

  const weapons = [
    /* SMG Weapons */
    {
      id: "fennec",
      name: "Fennec",
      category: "SMG",
      image: "images/attachments/fennec_smg.jpg",
      buildImage: "images/attachments/fennec_smg2.jpg",
    },

    {
      id: "rus-79u",
      name: "RUS-79U",
      category: "SMG",
      image: "images/attachments/rus_SMG.jpg",
      buildImage: "images/attachments/rus_SMG2.jpg",
    },

    {
      id: "switchblade x9",
      name: "Switchblade X9",
      category: "SMG",
      image: "images/attachments/switchblade_SMG.jpg",
      buildImage: "images/attachments/switchblade_SMG2.jpg",
    },

    {
      id: "mac10",
      name: "MAC-10",
      category: "SMG",
      image: "images/attachments/mac10_smg.jpg",
      buildImage: "images/attachments/mac10_smg2.jpg",
    },

    {
      id: "chicom",
      name: "Chicom",
      category: "SMG",
      image: "images/attachments/chicom_smg.jpg",
      buildImage: "images/attachments/chicom_smg2.jpg",
    },

    {
      id: "gks",
      name: "GKS",
      category: "SMG",
      image: "images/attachments/gks_smg.jpg",
      buildImage: "images/attachments/gks_smg2.jpg",
    },

    {
      id: "mx9",
      name: "MX9",
      category: "SMG",
      image: "images/attachments/mx9_smg.jpg",
      buildImage: "images/attachments/mx9_smg2.jpg",
    },

    {
      id: "qxr",
      name: "QXR",
      category: "SMG",
      image: "images/attachments/qxr_smg.jpg",
      buildImage: "images/attachments/qxr_smg2.jpg",
    },

    {
      id: "pharo",
      name: "Pharo",
      category: "SMG",
      image: "images/attachments/pharo_smg.jpg",
      buildImage: "images/attachments/pharo_smg2.jpg",
    },

    {
      id: "qq9",
      name: "QQ9",
      category: "SMG",
      image: "images/attachments/qq9_smg.jpg",
      buildImage: "images/attachments/qq9_smg2.jpg",
    },

    {
      id: "agr556",
      name: "AGR 556",
      category: "SMG",
      image: "images/attachments/agr556_smg.jpg",
      buildImage: "images/attachments/agr556_smg2.jpg",
    },

    {
      id: "uss9",
      name: "USS 9",
      category: "SMG",
      image: "images/attachments/uss9_smg.jpg",
      buildImage: "images/attachments/uss9_smg2.jpg",
    },

    {
      id: "vmp",
      name: "VMP",
      category: "SMG",
      image: "images/attachments/vmp_smg.jpg",
      buildImage: "images/attachments/vmp_smg2.jpg",
    },

    {
      id: "ppsh-41",
      name: "PPSh-41",
      category: "SMG",
      image: "images/attachments/ppsh41_smg.jpg",
      buildImage: "images/attachments/ppsh41_smg2.jpg",
    },

    {
      id: "pp19 bizon",
      name: "PP19 Bizon",
      category: "SMG",
      image: "images/attachments/pp19bizon_smg.jpg",
      buildImage: "images/attachments/pp19bizon_smg2.jpg",
    },

    {
      id: "cbr4",
      name: "CBR4",
      category: "SMG",
      image: "images/attachments/cbr4_smg.jpg",
      buildImage: "images/attachments/cbr4_smg2.jpg",
    },

    {
      id: "cordite",
      name: "Cordite",
      category: "SMG",
      image: "images/attachments/cordite_smg.jpg",
      buildImage: "images/attachments/cordite_smg2.jpg",
    },

    {
      id: "ots-9",
      name: "OTs-9",
      category: "SMG",
      image: "images/attachments/ots9_smg.jpg",
      buildImage: "images/attachments/ots9_smg2.jpg",
    },

    {
      id: "cx-9",
      name: "CX-9",
      category: "SMG",
      image: "images/attachments/cx9_smg.jpg",
      buildImage: "images/attachments/cx9_smg2.jpg",
    },

    {
      id: "pdw-57",
      name: "PDW-57",
      category: "SMG",
      image: "images/attachments/pdw57_smg.jpg",
      buildImage: "images/attachments/pdw57_smg2.jpg",
    },
    /* SMG Weapons End */

    /* Assault Rifle Weapons */
    {
      id: "bal27",
      name: "BAL-27",
      category: "Assault Rifle",
      image: "images/attachments/bal27_AR.jpg",
      buildImage: "images/attachments/bal27_AR2.jpg",
    },

    {
      id: "ak117",
      name: "AK-117",
      category: "Assault Rifle",
      image: "images/attachments/ak117_ar.jpg",
      buildImage: "images/attachments/ak117_ar2.jpg",
    },

    {
      id: "mx4",
      name: "MX4",
      category: "Assault Rifle",
      image: "images/attachments/mx4_ar.jpg",
      buildImage: "images/attachments/mx4_ar2.jpg",
    },

    {
      id: "asm10",
      name: "ASM10",
      category: "Assault Rifle",
      image: "images/attachments/asm10_ar.jpg",
      buildImage: "images/attachments/asm10_ar2.jpg",
    },

    {
      id: "ram7",
      name: "RAM-7",
      category: "Assault Rifle",
      image: "images/attachments/ram7_ar.jpg",
      buildImage: "images/attachments/ram7_ar2.jpg",
    },

    {
      id: "m4",
      name: "M4",
      category: "Assault Rifle",
      image: "images/attachments/m4_ar.jpg",
      buildImage: "images/attachments/m4_ar2.jpg",
    },

    {
      id: "ak-47",
      name: "AK-47",
      category: "Assault Rifle",
      image: "images/attachments/ak47_ar.jpg",
      buildImage: "images/attachments/ak47_ar2.jpg",
    },

    {
      id: "lk24",
      name: "LK24",
      category: "Assault Rifle",
      image: "images/attachments/lk24_ar.jpg",
      buildImage: "images/attachments/lk24_ar2.jpg",
    },

    {
      id: "type 25",
      name: "Type 25",
      category: "Assault Rifle",
      image: "images/attachments/type25_ar.jpg",
      buildImage: "images/attachments/type25_ar2.jpg",
    },

    {
      id: "kn44",
      name: "KN44",
      category: "Assault Rifle",
      image: "images/attachments/kn44_ar.jpg",
      buildImage: "images/attachments/kn44_ar2.jpg",
    },

    {
      id: "man-o-war",
      name: "Man-o-War",
      category: "Assault Rifle",
      image: "images/attachments/manowar_ar.jpg",
      buildImage: "images/attachments/manowar_ar2.jpg",
    },

    {
      id: "icr-1",
      name: "ICR-1",
      category: "Assault Rifle",
      image: "images/attachments/icr1_ar.jpg",
      buildImage: "images/attachments/icr1_ar2.jpg",
    },

    {
      id: "kilo 141",
      name: "Kilo 141",
      category: "Assault Rifle",
      image: "images/attachments/kilo141_ar.jpg",
      buildImage: "images/attachments/kilo141_ar2.jpg",
    },

    {
      id: "oden",
      name: "Oden",
      category: "Assault Rifle",
      image: "images/attachments/oden_ar.jpg",
      buildImage: "images/attachments/oden_ar2.jpg",
    },

    {
      id: "cr-56 amax",
      name: "CR-56 Amax",
      category: "Assault Rifle",
      image: "images/attachments/cr56amax_ar.jpg",
      buildImage: "images/attachments/cr56amax_ar2.jpg",
    },

    {
      id: "hbra3",
      name: "HBRa3",
      category: "Assault Rifle",
      image: "images/attachments/hbra3_ar.jpg",
      buildImage: "images/attachments/hbra3_ar2.jpg",
    },

    {
      id: "asval",
      name: "Asval",
      category: "Assault Rifle",
      image: "images/attachments/asval_ar.jpg",
      buildImage: "images/attachments/asval_ar2.jpg",
    },

    {
      id: "hvk-30",
      name: "HVK-30",
      category: "Assault Rifle",
      image: "images/attachments/hvk30_ar.jpg",
      buildImage: "images/attachments/hvk30_ar2.jpg",
    },

    {
      id: "m13",
      name: "M13",
      category: "Assault Rifle",
      image: "images/attachments/m13_ar.jpg",
      buildImage: "images/attachments/m13_ar2.jpg",
    },

    {
      id: "dr-h",
      name: "DR-H",
      category: "Assault Rifle",
      image: "images/attachments/drh_ar.jpg",
      buildImage: "images/attachments/drh_ar2.jpg",
    },
    /* Assault Rifle Weapons End */

    /* Sniper Weapons */
    {
      id: "tundra",
      name: "LW3-Tundra",
      category: "Sniper",
      image: "images/attachments/tundra_SR.jpg",
      buildImage: "images/attachments/tundra_SR2.jpg",
    },

    {
      id: "dlq33",
      name: "DLQ33",
      category: "Sniper",
      image: "images/attachments/dlq33_sr.jpg",
      buildImage: "images/attachments/dlq33_sr2.jpg",
    },

    {
      id: "locus",
      name: "Locus",
      category: "Sniper",
      image: "images/attachments/locus_sr.jpg",
      buildImage: "images/attachments/locus_sr2.jpg",
    },

    {
      id: "rytec amr",
      name: "Rytec AMR",
      category: "Sniper",
      image: "images/attachments/rytecamr_sr.jpg",
      buildImage: "images/attachments/rytecamr_sr2.jpg",
    },

    {
      id: "3-line rifle",
      name: "3-Line Rifle",
      category: "Sniper",
      image: "images/attachments/3linerifle_sr.jpg",
      buildImage: "images/attachments/3linerifle_sr2.jpg",
    },
    /* Sniper Weapons End */

    /* LMG Weapons */
    {
      id: "pkm",
      name: "PKM",
      category: "LMG",
      image: "images/attachments/pkm_LMG.jpg",
      buildImage: "images/attachments/pkm_LMG2.jpg",
    },

    {
      id: "chopper",
      name: "Chopper",
      category: "LMG",
      image: "images/attachments/chopper_lmg.jpg",
      buildImage: "images/attachments/chopper_lmg2.jpg",
    },

    {
      id: "holger 26",
      name: "Holger 26",
      category: "LMG",
      image: "images/attachments/holger26_lmg.jpg",
      buildImage: "images/attachments/holger26_lmg2.jpg",
    },

    {
      id: "mg42",
      name: "MG42",
      category: "LMG",
      image: "images/attachments/mg42_lmg.jpg",
      buildImage: "images/attachments/mg42_lmg2.jpg",
    },

    {
      id: "dp27",
      name: "DP27",
      category: "LMG",
      image: "images/attachments/dp27_lmg.jpg",
      buildImage: "images/attachments/dp27_lmg2.jpg",
    },
    /* LMG Weapons End */
    
    /* Shotgun Weapons */
    {
      id: "krm",
      name: "KRM-262",
      category: "Shotgun",
      image: "images/attachments/krm_SG.jpg",
      buildImage: "images/attachments/krm_SG2.jpg",
    },

    {
      id: "hs0405",
      name: "HS0405",
      category: "Shotgun",
      image: "images/attachments/hs0405_sg.jpg",
      buildImage: "images/attachments/hs0405_sg2.jpg",
    },

    {
      id: "by15",
      name: "BY15",
      category: "Shotgun",
      image: "images/attachments/by15_sg.jpg",
      buildImage: "images/attachments/by15_sg2.jpg",
    },

    {
      id: "r9-0",
      name: "R9-0",
      category: "Shotgun",
      image: "images/attachments/r90_sg.jpg",
      buildImage: "images/attachments/r90_sg2.jpg",
    },

    {
      id: "striker",
      name: "Striker",
      category: "Shotgun",
      image: "images/attachments/striker_sg.jpg",
      buildImage: "images/attachments/striker_sg2.jpg",
    },
    /* Shotgun Weapons End */

    /* Marksman Weapons */
    {
      id: "iso",
      name: "ISO-14",
      category: "Marksman",
      image: "images/attachments/iso_MM.jpg",
      buildImage: "images/attachments/iso_MM2.jpg",
    },

    {
      id: "sks",
      name: "SKS",
      category: "Marksman",
      image: "images/attachments/sks_mm.jpg",
      buildImage: "images/attachments/sks_mm2.jpg",
    },

    {
      id: "type 63",
      name: "Type 63",
      category: "Marksman",
      image: "images/attachments/type63_mm.jpg",
      buildImage: "images/attachments/type63_mm2.jpg",
    },

    {
      id: "kilo bolt-action",
      name: "Kilo Bolt-Action",
      category: "Marksman",
      image: "images/attachments/kiloboltaction_mm.jpg",
      buildImage: "images/attachments/kiloboltaction_mm2.jpg",
    },

    {
      id: "sp-r 208",
      name: "SP-R 208",
      category: "Marksman",
      image: "images/attachments/spr208_mm.jpg",
      buildImage: "images/attachments/spr208_mm2.jpg",
    },
    /* Marksman Weapons End */

    /* Pistols Weapons */
    {
      id: ".50 gs",
      name: ".50 GS",
      category: "Pistols",
      image: "images/attachments/50gs_pistol.jpg",
      buildImage: "images/attachments/50gs_pistol2.jpg",
    },

    {
      id: "machine pistol",
      name: "Machine Pistol",
      category: "Pistols",
      image: "images/attachments/machinepistol_pistol.jpg",
      buildImage: "images/attachments/machinepistol_pistol2.jpg",
    }
    /* Pistols Weapons End */
  ];

  /* Loadout Categories */
  const loadoutCategories = [
    { name: "Search & Destroy" },
    { name: "Hardpoint/Domination/Control" },
    { name: "Frontline/Team Deathmatch" }
  ];

  const loadouts = [
    /* Search & Destroy (S&D) Loadout */
    {
      id: "snd-loadout-1",
      name: "Loadout 1",
      category: "Search & Destroy",
      image: "images/loadouts/snd_loadout.jpg"
    },

    {
      id: "snd-loadout-2",
      name: "Loadout 2",
      category: "Search & Destroy",
      image: "images/loadouts/snd_loadout2.jpg"
    },

    {
      id: "snd-loadout-3",
      name: "Loadout 3",
      category: "Search & Destroy",
      image: "images/loadouts/snd_loadout3.jpg"
    },

    {
      id: "snd-loadout-4",
      name: "Loadout 4",
      category: "Search & Destroy",
      image: "images/loadouts/snd_loadout4.jpg"
    },

    {
      id: "snd-loadout-5",
      name: "Loadout 5",
      category: "Search & Destroy",
      image: "images/loadouts/snd_loadout5.jpg"
    },

    {
      id: "snd-loadout-6",
      name: "Loadout 6",
      category: "Search & Destroy",
      image: "images/loadouts/snd_loadout6.jpg"
    },

    {
      id: "snd-loadout-7",
      name: "Loadout 7",
      category: "Search & Destroy",
      image: "images/loadouts/snd_loadout7.jpg"
    },

    {
      id: "snd-loadout-8",
      name: "Loadout 8",
      category: "Search & Destroy",
      image: "images/loadouts/snd_loadout8.jpg"
    },

    {
      id: "snd-loadout-9",
      name: "Loadout 9",
      category: "Search & Destroy",
      image: "images/loadouts/snd_loadout9.jpg"
    },

    {
      id: "snd-loadout-10",
      name: "Loadout 10",
      category: "Search & Destroy",
      image: "images/loadouts/snd_loadout10.jpg"
    },
    /* Search & Destroy (S&D) Loadout End */

    /* Hardpoint/Domination/Control Loadout */
    {
      id: "hp-domi-control-loadout-1",
      name: "Loadout 1",
      category: "Hardpoint/Domination/Control",
      image: "images/loadouts/hp_domi_control_loadout.jpg"
    },

    {
      id: "hp-domi-control-loadout-2",
      name: "Loadout 2",
      category: "Hardpoint/Domination/Control",
      image: "images/loadouts/hp_domi_control_loadout2.jpg"
    },

    {
      id: "hp-domi-control-loadout-3",
      name: "Loadout 3",
      category: "Hardpoint/Domination/Control",
      image: "images/loadouts/hp_domi_control_loadout3.jpg"
    },

    {
      id: "hp-domi-control-loadout-4",
      name: "Loadout 4",
      category: "Hardpoint/Domination/Control",
      image: "images/loadouts/hp_domi_control_loadout4.jpg"
    },

    {
      id: "hp-domi-control-loadout-5",
      name: "Loadout 5",
      category: "Hardpoint/Domination/Control",
      image: "images/loadouts/hp_domi_control_loadout5.jpg"
    },

    {
      id: "hp-domi-control-loadout-6",
      name: "Loadout 6",
      category: "Hardpoint/Domination/Control",
      image: "images/loadouts/hp_domi_control_loadout6.jpg"
    },

    {
      id: "hp-domi-control-loadout-7",
      name: "Loadout 7",
      category: "Hardpoint/Domination/Control",
      image: "images/loadouts/hp_domi_control_loadout7.jpg"
    },

    {
      id: "hp-domi-control-loadout-8",
      name: "Loadout 8",
      category: "Hardpoint/Domination/Control",
      image: "images/loadouts/hp_domi_control_loadout8.jpg"
    },

    {
      id: "hp-domi-control-loadout-9",
      name: "Loadout 9",
      category: "Hardpoint/Domination/Control",
      image: "images/loadouts/hp_domi_control_loadout9.jpg"
    },

    {
      id: "hp-domi-control-loadout-10",
      name: "Loadout 10",
      category: "Hardpoint/Domination/Control",
      image: "images/loadouts/hp_domi_control_loadout10.jpg"
    },
    /* Hardpoint/Domination/Control Loadout End */

    /* Frontline/Team Deathmatch Loadout */
    {
      id: "ftl-tdm-loadout-1",
      name: "Loadout 1",
      category: "Frontline/Team Deathmatch",
      image: "images/loadouts/ftl_tdm_loadout.jpg"
    },

    {
      id: "ftl-tdm-loadout-2",
      name: "Loadout 2",
      category: "Frontline/Team Deathmatch",
      image: "images/loadouts/ftl_tdm_loadout2.jpg"
    },

    {
      id: "ftl-tdm-loadout-3",
      name: "Loadout 3",
      category: "Frontline/Team Deathmatch",
      image: "images/loadouts/ftl_tdm_loadout3.jpg"
    },

    {
      id: "ftl-tdm-loadout-4",
      name: "Loadout 4",
      category: "Frontline/Team Deathmatch",
      image: "images/loadouts/ftl_tdm_loadout4.jpg"
    },

    {
      id: "ftl-tdm-loadout-5",
      name: "Loadout 5",
      category: "Frontline/Team Deathmatch",
      image: "images/loadouts/ftl_tdm_loadout5.jpg"
    }
    /* Frontline/Team Deathmatch Loadout End */
  ];

  const categoryContainer = document.getElementById("attachmentCategories");
  const weaponList = document.getElementById("attachmentWeaponList");
  const attachmentPagination = document.getElementById("attachmentPagination");
  const loadoutCategoryContainer = document.getElementById("loadoutCategories");
  const loadoutList = document.getElementById("loadoutList");
  const modalImage = document.getElementById("attachmentModalImage");
  const modalElement = document.getElementById("attachmentImageModal");
  const attachmentItemsPerPage = 10;
  let activeAttachmentCategory = "SMG";
  let currentAttachmentPage = 1;

  if (!categoryContainer || !weaponList || !attachmentPagination || !loadoutCategoryContainer || !loadoutList || !modalImage || !modalElement) return;

  function setupNavbarActiveState() {
    const navLinks = Array.from(document.querySelectorAll(".navbar-cod .nav-link[href^='#']"));
    const sections = navLinks
      .map(link => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        const sectionId = link.getAttribute("href").slice(1);
        setNavbarActiveLink(sectionId);
      });
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setNavbarActiveLink(entry.target.id);
        }
      });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });

    sections.forEach(section => observer.observe(section));
  }

  function renderCategories(activeCategory = "SMG") {
    categoryContainer.innerHTML = categories.map(category => `
      <button class="attachment-category-btn ${category.name === activeCategory ? "active" : ""}" data-category="${category.name}">
        ${category.name}
      </button>
    `).join("");

    categoryContainer.querySelectorAll(".attachment-category-btn").forEach(button => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        activeAttachmentCategory = category;
        currentAttachmentPage = 1;
        categoryContainer.querySelectorAll(".attachment-category-btn").forEach(categoryButton => {
          categoryButton.classList.toggle("active", categoryButton === button);
        });
        renderWeapons(category);
      });
    });
    observeRevealElements(categoryContainer);
  }

  function renderWeapons(category) {
    const filteredWeapons = weapons.filter(weapon => weapon.category === category);
    const totalPages = Math.ceil(filteredWeapons.length / attachmentItemsPerPage);
    const pageStart = (currentAttachmentPage - 1) * attachmentItemsPerPage;
    const visibleWeapons = filteredWeapons.slice(pageStart, pageStart + attachmentItemsPerPage);

    if (filteredWeapons.length === 0) {
      weaponList.innerHTML = `
        <div class="col-12">
          <div class="attachment-empty">
            <i class="bi bi-plus-circle"></i>
            <p class="mb-0">More ${category} weapons will be added soon.</p>
          </div>
        </div>
      `;
      attachmentPagination.innerHTML = "";
      return;
    }

    weaponList.innerHTML = visibleWeapons.map(weapon => `
      <div class="col-6 col-md-4 col-lg-3 attachment-weapon-col">
        <button class="attachment-weapon-card scroll-reveal" data-weapon-id="${weapon.id}">
          <img src="${weapon.image}" alt="${weapon.name} weapon preview">
          <span>${weapon.name}</span>
        </button>
      </div>
    `).join("");

    weaponList.querySelectorAll(".attachment-weapon-card").forEach(button => {
      button.addEventListener("click", () => {
        const weapon = weapons.find(item => item.id === button.getAttribute("data-weapon-id"));
        if (weapon) openBuildModal(weapon);
      });
    });
    observeRevealElements(weaponList);
    renderAttachmentPagination(totalPages);
  }

  function renderAttachmentPagination(totalPages) {
    if (totalPages <= 1) {
      attachmentPagination.innerHTML = "";
      return;
    }

    const pageButtons = Array.from({ length: totalPages }, (_, index) => {
      const pageNumber = index + 1;

      return `
        <button class="attachment-page-btn ${pageNumber === currentAttachmentPage ? "active" : ""}" type="button" data-page="${pageNumber}" aria-label="Go to attachment page ${pageNumber}">
          ${pageNumber}
        </button>
      `;
    }).join("");

    attachmentPagination.innerHTML = `
      <button class="attachment-page-btn" type="button" data-page="prev" aria-label="Previous attachment page" ${currentAttachmentPage === 1 ? "disabled" : ""}>
        <i class="bi bi-chevron-left"></i>
      </button>
      ${pageButtons}
      <button class="attachment-page-btn" type="button" data-page="next" aria-label="Next attachment page" ${currentAttachmentPage === totalPages ? "disabled" : ""}>
        <i class="bi bi-chevron-right"></i>
      </button>
    `;

    attachmentPagination.querySelectorAll(".attachment-page-btn").forEach(button => {
      button.addEventListener("click", () => {
        const page = button.getAttribute("data-page");

        if (page === "prev") {
          currentAttachmentPage -= 1;
        } else if (page === "next") {
          currentAttachmentPage += 1;
        } else {
          currentAttachmentPage = Number(page);
        }

        renderWeapons(activeAttachmentCategory);
      });
    });
  }

  function openBuildModal(weapon) {
    modalImage.src = weapon.buildImage;
    modalImage.alt = `${weapon.name} attachment build`;
    bootstrap.Modal.getOrCreateInstance(modalElement).show();
  }

  function renderLoadoutCategories(activeCategory = "Search & Destroy") {
    loadoutCategoryContainer.innerHTML = loadoutCategories.map(category => `
      <button class="loadout-category-btn ${category.name === activeCategory ? "active" : ""}" data-category="${category.name}">
        ${category.name}
      </button>
    `).join("");

    loadoutCategoryContainer.querySelectorAll(".loadout-category-btn").forEach(button => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        loadoutCategoryContainer.querySelectorAll(".loadout-category-btn").forEach(categoryButton => {
          categoryButton.classList.toggle("active", categoryButton === button);
        });
        renderLoadouts(category);
      });
    });
  }

  function renderLoadouts(category) {
    const filteredLoadouts = loadouts.filter(loadout => loadout.category === category);

    if (filteredLoadouts.length === 0) {
      loadoutList.innerHTML = `
        <div class="col-12">
          <div class="attachment-empty">
            <i class="bi bi-plus-circle"></i>
            <p class="mb-0">More ${category} loadouts will be added soon.</p>
          </div>
        </div>
      `;
      return;
    }

    loadoutList.innerHTML = filteredLoadouts.map(loadout => `
      <div class="col-6 col-md-4 col-lg-3 loadout-build-col">
        <button class="loadout-build-card scroll-reveal" data-loadout-id="${loadout.id}">
          <img src="${loadout.image}" alt="${loadout.name} loadout preview">
          <span>${loadout.name}</span>
        </button>
      </div>
    `).join("");

    loadoutList.querySelectorAll(".loadout-build-card").forEach(button => {
      button.addEventListener("click", () => {
        const loadout = loadouts.find(item => item.id === button.getAttribute("data-loadout-id"));
        if (loadout) openImageModal(loadout.image, `${loadout.name} loadout`);
      });
    });
    observeRevealElements(loadoutList);
  }

  function openImageModal(src, alt) {
    modalImage.src = src;
    modalImage.alt = alt;
    bootstrap.Modal.getOrCreateInstance(modalElement).show();
  }

  function setupProfileImageModal() {
    document.querySelectorAll(".profile-image-button").forEach(button => {
      button.addEventListener("click", () => {
        openImageModal(
          button.getAttribute("data-profile-image"),
          button.getAttribute("data-profile-alt") || "CODM profile screenshot"
        );
      });
    });
  }

  function observeRevealElements(scope = document) {
    const revealElements = scope.querySelectorAll(".scroll-reveal:not(.is-visible)");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach(element => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add("is-visible");
            setTimeout(() => {
              entry.target.style.transitionDelay = "0ms";
            }, 850);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index * 70, 350)}ms`;
      observer.observe(element);
    });
  }

  renderCategories();
  renderWeapons("SMG");
  renderLoadoutCategories();
  renderLoadouts("Search & Destroy");
  setupProfileImageModal();
  observeRevealElements();
  setupNavbarActiveState();
  setupNavbarToggle();
})();

function setupNavbarToggle() {
  const navbarToggle = document.querySelector('.navbar-toggle-custom');
  const navbarCollapse = document.getElementById('codNav');
  
  if (navbarToggle && navbarCollapse) {
    // Initialize based on current state
    updateToggleIcon(navbarCollapse.classList.contains('show'));
    
    // Listen for Bootstrap collapse events
    navbarCollapse.addEventListener('show.bs.collapse', function() {
      updateToggleIcon(true);
    });
    
    navbarCollapse.addEventListener('hide.bs.collapse', function() {
      updateToggleIcon(false);
    });
  }
  
  function updateToggleIcon(isExpanded) {
    if (navbarToggle) {
      if (isExpanded) {
        navbarToggle.classList.add('collapsed');
        navbarToggle.setAttribute('aria-expanded', 'true');
      } else {
        navbarToggle.classList.remove('collapsed');
        navbarToggle.setAttribute('aria-expanded', 'false');
      }
    }
  }
}
