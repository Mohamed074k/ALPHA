// // // // /* Created by Mohamed Elsayed*/
// // // // const navLinks = document.querySelectorAll('.side-menu li');
// // // // const addTransformationBtn = document.getElementById('add-transformation-btn');
// // // // const addPackageBtn = document.getElementById('add-package-btn');
// // // // const addAdminBtn = document.getElementById('add-admin-btn');
// // // // const logoutBtn = document.querySelector('.logout');
// // // // const closeBtns = document.querySelectorAll('.close');
// // // // const modals = document.querySelectorAll('.modal');
// // // // const sections = document.querySelectorAll('.content-section');
// // // // const feedbackSection = document.getElementById('feedback-section');
// // // // const packagesSection = document.getElementById('packages-section');
// // // // const adminSection = document.getElementById('admin-section');
// // // // const transformationsSection = document.getElementById('transformations-section');
// // // // const feedbackList = document.querySelector('.feedback-list');
// // // // const packagesGrid = document.querySelector('.packages-grid');
// // // // const transformationsGrid = document.querySelector('.transformations-grid');
// // // // const feedbackCount = document.getElementById('pending-feedback-count');
// // // // const packagesCount = document.getElementById('active-packages-count');
// // // // const transformationsCount = document.getElementById('transformations-count');
// // // // const feedbackCountValue = 2; // Example value
// // // // const packagesCountValue = 3; // Example value


// // // // let sideMenu = document.querySelectorAll(".nav-link");
// // // // sideMenu.forEach((item) => {
// // // //   let li = item.parentElement;

// // // //   item.addEventListener("click", () => {
// // // //     sideMenu.forEach((link) => {
// // // //       link.parentElement.classList.remove("active");
// // // //     });
// // // //     li.classList.add("active");
// // // //   });
// // // // });

// // // // let menuBar = document.querySelector(".menu-btn");
// // // // let sideBar = document.querySelector(".sidebar");
// // // // menuBar.addEventListener("click", () => {
// // // //   sideBar.classList.toggle("hide");
// // // // });

// // // // let switchMode = document.getElementById("switch-mode");
// // // // switchMode.addEventListener("change", (e) => {
// // // //   if (e.target.checked) {
// // // //     document.body.classList.add("dark");
// // // //   } else {
// // // //     document.body.classList.remove("dark");
// // // //   }
// // // // });

// // // // let searchFrom = document.querySelector(".content nav form");
// // // // let searchBtn = document.querySelector(".search-btn");
// // // // let searchIcon = document.querySelector(".search-icon");
// // // // searchBtn.addEventListener("click", (e) => {
// // // //   if (window.innerWidth < 576) {
// // // //     e.preventDefault();
// // // //     searchFrom.classList.toggle("show");
// // // //     if (searchFrom.classList.contains("show")) {
// // // //       searchIcon.classList.replace("fa-search", "fa-times");
// // // //     } else {
// // // //       searchIcon.classList.replace("fa-times", "fa-search");
// // // //     }
// // // //   }
// // // // });

// // // // window.addEventListener("resize", () => {
// // // //   if (window.innerWidth > 576) {
// // // //     searchIcon.classList.replace("fa-times", "fa-search");
// // // //     searchFrom.classList.remove("show");
// // // //   }
// // // //   if (window.innerWidth < 768) {
// // // //     sideBar.classList.add("hide");
// // // //   }
// // // //   if (window.innerWidth < 1040) {
// // // //     sideBar.classList.add("hide");
// // // //     menuBar.style.display = "none";
// // // //   }     
// // // //   if (window.innerWidth > 1040) {
// // // //      menuBar.style.display = "block";
// // // //   }
// // // // });




 
 

// // // // // Navigation
// // // // navLinks.forEach(link => {
// // // //   // Hide all modals on nav items click
// // // //   link.addEventListener('click', () => {
// // // //     modals.forEach(modal => {
// // // //       modal.style.display = 'none';
// // // //   });

// // // //       // Remove active class from all links and sections
// // // //       navLinks.forEach(l => l.classList.remove('active'));
// // // //       sections.forEach(s => s.classList.remove('active'));

// // // //       // Add active class to clicked link and corresponding section
// // // //       link.classList.add('active');
// // // //       const sectionId = link.getAttribute('data-section');
// // // //       document.getElementById(sectionId).classList.add('active');
// // // //   });
// // // // });





// // // // // Modal Management
// // // // function openModal(modalId) {
// // // //   document.getElementById(modalId).style.display = 'block';
// // // // }

// // // // function closeModal(modalId) {
// // // //   document.getElementById(modalId).style.display = 'none';
// // // // }

// // // // // Add click events for modal buttons
// // // // addPackageBtn?.addEventListener('click', () => openModal('package-modal'));
// // // // addTransformationBtn?.addEventListener('click', () => openModal('transformation-modal'));
// // // // addAdminBtn?.addEventListener('click', () => openModal('admin-modal'));

// // // // // Close modals
// // // // closeBtns.forEach(btn => {
// // // //   btn.addEventListener('click', () => {
// // // //       const modal = btn.closest('.modal');
// // // //       if (modal) {
// // // //           modal.style.display = 'none';
// // // //       }
// // // //   });
// // // // });

// // // // // Close modal when clicking outside
// // // // window.addEventListener('click', (e) => {
// // // //   modals.forEach(modal => {
// // // //       if (e.target === modal) {
// // // //           modal.style.display = 'none';
// // // //       }
// // // //   });
// // // // });

// // // // // Login Form Handler
// // // // const loginForm = document.getElementById('login-form');
// // // // if (loginForm) {
// // // //   loginForm.addEventListener('submit', (e) => {
// // // //       e.preventDefault();
// // // //       const username = loginForm.querySelector('input[type="text"]').value;
// // // //       const password = loginForm.querySelector('input[type="password"]').value;
      
// // // //       // Here you would typically make an API call to verify credentials
// // // //       // For now, we'll just simulate it
// // // //       if (username && password) {
// // // //           window.location.href = 'admin.html';
// // // //       }
// // // //   });
// // // // }

// // // // // Logout Handler
// // // // logoutBtn?.addEventListener('click', () => {
// // // //   // Here you would typically clear session/tokens
// // // //   window.location.href = 'login.html';
// // // // });

// // // // // Example function to load feedback items
// // // // function loadFeedback() {
// // // //   const feedbackList = document.querySelector('.feedback-list');
// // // //   if (!feedbackList) return;

// // // //   // This would typically be an API call
// // // //   const mockFeedback = [
// // // //       { id: 1, name: 'John Doe', message: 'Great training program!', status: 'pending' },
// // // //       { id: 2, name: 'Jane Smith', message: 'Amazing results in just 3 months.', status: 'approved' }
// // // //   ];

// // // //   feedbackList.innerHTML = mockFeedback.map(feedback => `
// // // //       <div class="feedback-item" data-id="${feedback.id}">
// // // //           <div>
// // // //               <h4>${feedback.name}</h4>
// // // //               <p>${feedback.message}</p>
// // // //           </div>
// // // //           <div class="feedback-actions">
// // // //               <button class="accept-btn">
// // // // Accept
// // // //               </button>
// // // //               <button class="delete-btn">
// // // //                   <i class="fas fa-trash"></i>
// // // //               </button>
// // // //           </div>
// // // //       </div>
// // // //   `).join('');
// // // // }

// // // // // Example function to load packages
// // // // function loadPackages() {
// // // //   const packagesGrid = document.querySelector('.packages-grid');
// // // //   if (!packagesGrid) return;

// // // //   // This would typically be an API call
// // // //   const mockPackages = [
// // // //       { id: 1, name: 'Basic Plan', price: 99, details: '3 sessions per week' },
// // // //       { id: 2, name: 'Premium Plan', price: 199, details: '5 sessions per week + nutrition plan' }
// // // //   ];

// // // //   packagesGrid.innerHTML = mockPackages.map(pkg => `
// // // //       <div class="package-card" data-id="${pkg.id}">
// // // //           <h3>${pkg.name}</h3>
// // // //           <p class="price">$${pkg.price}</p>
// // // //           <p>${pkg.details}</p>
// // // //           <div class="card-actions">
// // // //               <button class="edit-btn"><i class="fas fa-edit"></i></button>
// // // //               <button class="delete-btn"><i class="fas fa-trash"></i></button>
// // // //           </div>
// // // //       </div>
// // // //   `).join('');
// // // // }



// // // // // Example function to load transformations
// // // // function loadTransformations() {
// // // //   const transformationsGrid = document.querySelector('.transformations-grid');
// // // //   if (!transformationsGrid) return;

// // // //   // This would typically be an API call
// // // //   const mockTransformations = [
// // // //       { id: 1, image: 'https://source.unsplash.com/random/300x300?fitness', name: 'Client 1' },
// // // //       { id: 2, image: 'https://source.unsplash.com/random/300x300?gym', name: 'Client 2' }
// // // //   ];

// // // //   transformationsGrid.innerHTML = mockTransformations.map(trans => `
// // // //       <div class="transformation-card" data-id="${trans.id}">
// // // //           <img src="${trans.image}" alt="${trans.name}'s transformation">
// // // //           <h4>${trans.name}</h4>
// // // //           <div class="card-actions">
// // // //               <button class="delete-btn"><i class="fas fa-trash"></i></button>
// // // //           </div>
// // // //       </div>
// // // //   `).join('');
// // // // }

// // // // // Load data when page loads
// // // // document.addEventListener('DOMContentLoaded', () => {
// // // //   // Hide all modals on page load
// // // //   modals.forEach(modal => {
// // // //     modal.style.display = 'none';
// // // // });

// // // //   loadFeedback();
// // // //   loadPackages();
// // // //   loadTransformations();

// // // //   // Update dashboard counts
// // // //   document.getElementById('pending-feedback-count').textContent = '2';
// // // //   document.getElementById('active-packages-count').textContent = '3';
// // // //   document.getElementById('transformations-count').textContent = '8';

  
// // // // });

// // // // // Form Submissions
// // // // const packageForm = document.getElementById('package-form');
// // // // packageForm?.addEventListener('submit', (e) => {
// // // //   e.preventDefault();
// // // //   // Handle package form submission
// // // //   closeModal('package-modal');
// // // // });

// // // // const transformationForm = document.getElementById('transformation-form');
// // // // transformationForm?.addEventListener('submit', (e) => {
// // // //   e.preventDefault();
// // // //   // Handle transformation form submission
// // // //   closeModal('transformation-modal');
// // // // });

// // // // const adminForm = document.getElementById('admin-form');
// // // // adminForm?.addEventListener('submit', (e) => {
// // // //   e.preventDefault();
// // // //   // Handle admin form submission
// // // //   closeModal('admin-modal');
// // // // });



// // // /* Created by Mohamed Elsayed*/
// // // const navLinks = document.querySelectorAll('.side-menu li');
// // // const addTransformationBtn = document.getElementById('add-transformation-btn');
// // // const addPackageBtn = document.getElementById('add-package-btn');
// // // const addAdminBtn = document.getElementById('add-admin-btn');
// // // const logoutBtn = document.querySelector('.logout');
// // // const closeBtns = document.querySelectorAll('.close');
// // // const modals = document.querySelectorAll('.modal');
// // // const sections = document.querySelectorAll('.content-section');
// // // const feedbackList = document.querySelector('.feedback-list');
// // // const packagesGrid = document.querySelector('.packages-grid');
// // // const transformationsGrid = document.querySelector('.transformations-grid');
// // // const packageForm = document.getElementById('package-form');
// // // const transformationForm = document.getElementById('transformation-form');
// // // const adminForm = document.getElementById('admin-form');

// // // let sideMenu = document.querySelectorAll(".nav-link");
// // // sideMenu.forEach((item) => {
// // //   let li = item.parentElement;

// // //   item.addEventListener("click", () => {
// // //     sideMenu.forEach((link) => {
// // //       link.parentElement.classList.remove("active");
// // //     });
// // //     li.classList.add("active");
// // //   });
// // // });

// // // let menuBar = document.querySelector(".menu-btn");
// // // let sideBar = document.querySelector(".sidebar");
// // // menuBar.addEventListener("click", () => {
// // //   sideBar.classList.toggle("hide");
// // // });

// // // let switchMode = document.getElementById("switch-mode");
// // // switchMode.addEventListener("change", (e) => {
// // //   if (e.target.checked) {
// // //     document.body.classList.add("dark");
// // //   } else {
// // //     document.body.classList.remove("dark");
// // //   }
// // // });

// // // let searchFrom = document.querySelector(".content nav form");
// // // let searchBtn = document.querySelector(".search-btn");
// // // let searchIcon = document.querySelector(".search-icon");
// // // searchBtn.addEventListener("click", (e) => {
// // //   if (window.innerWidth < 576) {
// // //     e.preventDefault();
// // //     searchFrom.classList.toggle("show");
// // //     if (searchFrom.classList.contains("show")) {
// // //       searchIcon.classList.replace("fa-search", "fa-times");
// // //     } else {
// // //       searchIcon.classList.replace("fa-times", "fa-search");
// // //     }
// // //   }
// // // });

// // // window.addEventListener("resize", () => {
// // //   if (window.innerWidth > 576) {
// // //     searchIcon.classList.replace("fa-times", "fa-search");
// // //     searchFrom.classList.remove("show");
// // //   }
// // //   if (window.innerWidth < 768) {
// // //     sideBar.classList.add("hide");
// // //   }
// // //   if (window.innerWidth < 1040) {
// // //     sideBar.classList.add("hide");
// // //     menuBar.style.display = "none";
// // //   }     
// // //   if (window.innerWidth > 1040) {
// // //      menuBar.style.display = "block";
// // //   }
// // // });

// // // // Navigation
// // // navLinks.forEach(link => {
// // //   link.addEventListener('click', () => {
// // //     modals.forEach(modal => {
// // //       modal.style.display = 'none';
// // //     });

// // //     navLinks.forEach(l => l.classList.remove('active'));
// // //     sections.forEach(s => s.classList.remove('active'));

// // //     link.classList.add('active');
// // //     const sectionId = link.getAttribute('data-section');
// // //     document.getElementById(sectionId).classList.add('active');
// // //   });
// // // });

// // // // Modal Management
// // // function openModal(modalId) {
// // //   document.getElementById(modalId).style.display = 'block';
// // // }

// // // function closeModal(modalId) {
// // //   document.getElementById(modalId).style.display = 'none';
// // // }

// // // // Modal buttons
// // // addPackageBtn?.addEventListener('click', () => {
// // //   packageForm.reset();
// // //   packageForm.querySelector('.submit-btn').textContent = 'Save Package';
// // //   delete packageForm.dataset.id;
// // //   openModal('package-modal');
// // // });

// // // addTransformationBtn?.addEventListener('click', () => openModal('transformation-modal'));
// // // addAdminBtn?.addEventListener('click', () => openModal('admin-modal'));

// // // // Close modals
// // // closeBtns.forEach(btn => {
// // //   btn.addEventListener('click', () => {
// // //     const modal = btn.closest('.modal');
// // //     if (modal) {
// // //       modal.style.display = 'none';
// // //     }
// // //   });
// // // });

// // // // Close modal when clicking outside
// // // window.addEventListener('click', (e) => {
// // //   modals.forEach(modal => {
// // //     if (e.target === modal) {
// // //       modal.style.display = 'none';
// // //     }
// // //   });
// // // });

// // // // Logout Handler
// // // logoutBtn?.addEventListener('click', () => {
// // //   window.location.href = 'index.html';
// // // });

// // // // Package Functions
// // // function loadPackageIntoModal(packageData) {
// // //   packageForm.dataset.id = packageData.id;
// // //   packageForm.querySelector('input[type="text"]').value = packageData.name;
// // //   packageForm.querySelector('input[type="number"]').value = packageData.price;
// // //   packageForm.querySelector('textarea').value = packageData.details;
// // //   packageForm.querySelector('.submit-btn').textContent = 'Update Package';
// // // }

// // // function setupPackageEditButtons() {
// // //   document.querySelectorAll('.edit-btn').forEach(btn => {
// // //     btn.addEventListener('click', (e) => {
// // //       const packageCard = e.target.closest('.package-card');
// // //       const packageId = packageCard.dataset.id;
      
// // //       const mockPackages = [
// // //         { id: 1, name: 'Basic Plan', price: 99, details: '3 sessions per week' },
// // //         { id: 2, name: 'Premium Plan', price: 199, details: '5 sessions per week + nutrition plan' }
// // //       ];
      
// // //       const packageToEdit = mockPackages.find(pkg => pkg.id == packageId);
// // //       if (packageToEdit) {
// // //         loadPackageIntoModal(packageToEdit);
// // //         openModal('package-modal');
// // //       }
// // //     });
// // //   });
// // // }

// // // function loadPackages() {
// // //   if (!packagesGrid) return;

// // //   const mockPackages = [
// // //     { id: 1, name: 'Basic Plan', price: 99, details: '3 sessions per week' },
// // //     { id: 2, name: 'Premium Plan', price: 199, details: '5 sessions per week + nutrition plan' }
// // //   ];

// // //   packagesGrid.innerHTML = mockPackages.map(pkg => `
// // //     <div class="package-card" data-id="${pkg.id}">
// // //       <h3>${pkg.name}</h3>
// // //       <p class="price">$${pkg.price}</p>
// // //       <p>${pkg.details}</p>
// // //       <div class="card-actions">
// // //         <button class="edit-btn"><i class="fas fa-edit"></i></button>
// // //         <button class="delete-btn"><i class="fas fa-trash"></i></button>
// // //       </div>
// // //     </div>
// // //   `).join('');

// // //   setupPackageEditButtons();
// // // }

// // // // Package Form Submission
// // // packageForm?.addEventListener('submit', (e) => {
// // //   e.preventDefault();
// // //   const form = e.target;
// // //   const packageId = form.dataset.id;
// // //   const name = form.querySelector('input[type="text"]').value;
// // //   const price = form.querySelector('input[type="number"]').value;
// // //   const details = form.querySelector('textarea').value;
  
// // //   if (packageId) {
// // //     // Update existing package
// // //     const packageCard = document.querySelector(`.package-card[data-id="${packageId}"]`);
// // //     if (packageCard) {
// // //       packageCard.querySelector('h3').textContent = name;
// // //       packageCard.querySelector('.price').textContent = `$${price}`;
// // //       packageCard.querySelector('p:not(.price)').textContent = details;
// // //     }
// // //   } else {
// // //     // Add new package
// // //     const newPackage = {
// // //       id: Date.now(),
// // //       name,
// // //       price,
// // //       details
// // //     };
    
// // //     packagesGrid.insertAdjacentHTML('beforeend', `
// // //       <div class="package-card" data-id="${newPackage.id}">
// // //         <h3>${newPackage.name}</h3>
// // //         <p class="price">$${newPackage.price}</p>
// // //         <p>${newPackage.details}</p>
// // //         <div class="card-actions">
// // //           <button class="edit-btn"><i class="fas fa-edit"></i></button>
// // //           <button class="delete-btn"><i class="fas fa-trash"></i></button>
// // //         </div>
// // //       </div>
// // //     `);
    
// // //     setupPackageEditButtons();
// // //   }
  
// // //   closeModal('package-modal');
// // //   form.reset();
// // //   form.querySelector('.submit-btn').textContent = 'Save Package';
// // //   delete form.dataset.id;
// // // });

// // // // Other Form Submissions
// // // transformationForm?.addEventListener('submit', (e) => {
// // //   e.preventDefault();
// // //   closeModal('transformation-modal');
// // // });

// // // adminForm?.addEventListener('submit', (e) => {
// // //   e.preventDefault();
// // //   closeModal('admin-modal');
// // // });

// // // // Load data when page loads
// // // document.addEventListener('DOMContentLoaded', () => {
// // //   modals.forEach(modal => {
// // //     modal.style.display = 'none';
// // //   });

// // //   loadPackages();
// // //   loadFeedback();
// // //   loadTransformations();

// // //   // Update dashboard counts
// // //   document.querySelector('.box-info li:nth-child(1) h2').textContent = '11';
// // //   document.querySelector('.box-info li:nth-child(2) h2').textContent = '3';
// // //   document.querySelector('.box-info li:nth-child(3) h2').textContent = '20';
// // // });

// // // // Example function to load feedback items
// // // function loadFeedback() {
// // //   if (!feedbackList) return;

// // //   const mockFeedback = [
// // //     { id: 1, name: 'John Doe', message: 'Great training program!', status: 'pending' },
// // //     { id: 2, name: 'Jane Smith', message: 'Amazing results in just 3 months.', status: 'approved' }
// // //   ];

// // //   feedbackList.innerHTML = mockFeedback.map(feedback => `
// // //     <div class="feedback-item" data-id="${feedback.id}">
// // //       <div>
// // //         <h4>${feedback.name}</h4>
// // //         <p>${feedback.message}</p>
// // //       </div>
// // //       <div class="feedback-actions">
// // //         <button class="accept-btn">Accept</button>
// // //         <button class="delete-btn">
// // //           <i class="fas fa-trash"></i>
// // //         </button>
// // //       </div>
// // //     </div>
// // //   `).join('');
// // // }

// // // // Example function to load transformations
// // // function loadTransformations() {
// // //   if (!transformationsGrid) return;

// // //   const mockTransformations = [
// // //     { id: 1, image: 'https://source.unsplash.com/random/300x300?fitness', name: 'Client 1' },
// // //     { id: 2, image: 'https://source.unsplash.com/random/300x300?gym', name: 'Client 2' }
// // //   ];

// // //   transformationsGrid.innerHTML = mockTransformations.map(trans => `
// // //     <div class="transformation-card" data-id="${trans.id}">
// // //       <img src="${trans.image}" alt="${trans.name}'s transformation">
// // //       <h4>${trans.name}</h4>
// // //       <div class="card-actions">
// // //         <button class="delete-btn"><i class="fas fa-trash"></i></button>
// // //       </div>
// // //     </div>
// // //   `).join('');
// // // }











// // /* Created by Mohamed Elsayed*/

// // // ========================
// // // DOM ELEMENTS
// // // ========================
// // const navLinks = document.querySelectorAll('.side-menu li');
// // const addTransformationBtn = document.getElementById('add-transformation-btn');
// // const addPackageBtn = document.getElementById('add-package-btn');
// // const addAdminBtn = document.getElementById('add-admin-btn');
// // const logoutBtn = document.querySelector('.logout');
// // const closeBtns = document.querySelectorAll('.close');
// // const modals = document.querySelectorAll('.modal');
// // const sections = document.querySelectorAll('.content-section');
// // const feedbackList = document.querySelector('.feedback-list');
// // const packagesGrid = document.querySelector('.packages-grid');
// // const transformationsGrid = document.querySelector('.transformations-grid');
// // const adminsList = document.querySelector('.admins-list');
// // const packageForm = document.getElementById('package-form');
// // const transformationForm = document.getElementById('transformation-form');
// // const adminForm = document.getElementById('admin-form');

// // // ========================
// // // DATA STORAGE
// // // ========================

// // // Initialize default data if none exists in localStorage
// // const DEFAULT_DATA = {
// //   packages: [
// //     { id: 1, name: 'Basic Plan', price: 99, details: '3 sessions per week' },
// //     { id: 2, name: 'Premium Plan', price: 199, details: '5 sessions per week + nutrition plan' }
// //   ],
// //   transformations: [
// //     { id: 1, image: 'https://source.unsplash.com/random/300x300?fitness', name: 'Client 1' },
// //     { id: 2, image: 'https://source.unsplash.com/random/300x300?gym', name: 'Client 2' }
// //   ],
// //   admins: [
// //     { id: 1, username: 'admin1', email: 'admin1@example.com' }
// //   ],
// //   feedback: [
// //     { id: 1, name: 'John Doe', message: 'Great training program!', status: 'pending' },
// //     { id: 2, name: 'Jane Smith', message: 'Amazing results in just 3 months.', status: 'approved' }
// //   ]
// // };

// // /**
// //  * Save data to localStorage
// //  * @param {string} key - Data key
// //  * @param {any} data - Data to store
// //  */
// // function saveData(key, data) {
// //   localStorage.setItem(key, JSON.stringify(data));
// // }

// // /**
// //  * Load data from localStorage
// //  * @param {string} key - Data key
// //  * @returns {any} Stored data or default if none exists
// //  */
// // function loadData(key) {
// //   const storedData = localStorage.getItem(key);
// //   return storedData ? JSON.parse(storedData) : DEFAULT_DATA[key];
// // }

// // // ========================
// // // PACKAGES FUNCTIONALITY
// // // ========================

// // function renderPackages() {
// //   const packages = loadData('packages');
  
// //   packagesGrid.innerHTML = packages.map(pkg => `
// //     <div class="package-card" data-id="${pkg.id}">
// //       <h3>${pkg.name}</h3>
// //       <p class="price">$${pkg.price}</p>
// //       <p>${pkg.details}</p>
// //       <div class="card-actions">
// //         <button class="edit-btn"><i class="fas fa-edit"></i></button>
// //         <button class="delete-btn"><i class="fas fa-trash"></i></button>
// //       </div>
// //     </div>
// //   `).join('');

// //   setupPackageEditButtons();
// //   setupPackageDeleteButtons();
// // }

// // function loadPackageIntoModal(packageData) {
// //   packageForm.dataset.id = packageData.id;
// //   packageForm.querySelector('input[type="text"]').value = packageData.name;
// //   packageForm.querySelector('input[type="number"]').value = packageData.price;
// //   packageForm.querySelector('textarea').value = packageData.details;
// //   packageForm.querySelector('.submit-btn').textContent = 'Update Package';
// // }

// // function setupPackageEditButtons() {
// //   document.querySelectorAll('.edit-btn').forEach(btn => {
// //     btn.addEventListener('click', (e) => {
// //       const packageCard = e.target.closest('.package-card');
// //       const packageId = parseInt(packageCard.dataset.id);
// //       const packages = loadData('packages');
// //       const packageToEdit = packages.find(pkg => pkg.id === packageId);
      
// //       if (packageToEdit) {
// //         loadPackageIntoModal(packageToEdit);
// //         openModal('package-modal');
// //       }
// //     });
// //   });
// // }

// // function setupPackageDeleteButtons() {
// //   document.querySelectorAll('.package-card .delete-btn').forEach(btn => {
// //     btn.addEventListener('click', (e) => {
// //       const packageCard = e.target.closest('.package-card');
// //       const packageId = parseInt(packageCard.dataset.id);
// //       let packages = loadData('packages');
      
// //       packages = packages.filter(pkg => pkg.id !== packageId);
// //       saveData('packages', packages);
// //       renderPackages();
// //     });
// //   });
// // }

// // packageForm?.addEventListener('submit', (e) => {
// //   e.preventDefault();
// //   const form = e.target;
// //   const packageId = form.dataset.id ? parseInt(form.dataset.id) : null;
// //   const name = form.querySelector('input[type="text"]').value;
// //   const price = parseFloat(form.querySelector('input[type="number"]').value);
// //   const details = form.querySelector('textarea').value;
  
// //   let packages = loadData('packages');
  
// //   if (packageId) {
// //     // Update existing package
// //     packages = packages.map(pkg => 
// //       pkg.id === packageId ? { ...pkg, name, price, details } : pkg
// //     );
// //   } else {
// //     // Add new package
// //     const newPackage = {
// //       id: Date.now(),
// //       name,
// //       price,
// //       details
// //     };
// //     packages.push(newPackage);
// //   }
  
// //   saveData('packages', packages);
// //   renderPackages();
// //   closeModal('package-modal');
// //   form.reset();
// //   form.querySelector('.submit-btn').textContent = 'Save Package';
// //   delete form.dataset.id;
// // });

// // // ========================
// // // TRANSFORMATIONS FUNCTIONALITY
// // // ========================

// // function renderTransformations() {
// //   const transformations = loadData('transformations');
  
// //   transformationsGrid.innerHTML = transformations.map(trans => `
// //     <div class="transformation-card" data-id="${trans.id}">
// //       <img src="${trans.image}" alt="${trans.name}'s transformation">
// //       <h4>${trans.name}</h4>
// //       <div class="card-actions">
// //         <button class="delete-btn"><i class="fas fa-trash"></i></button>
// //       </div>
// //     </div>
// //   `).join('');

// //   setupTransformationDeleteButtons();
// // }

// // transformationForm?.addEventListener('submit', (e) => {
// //   e.preventDefault();
// //   const form = e.target;
// //   const imageFile = form.querySelector('input[type="file"]').files[0];
// //   const clientName = form.querySelector('input[type="text"]').value;
  
// //   if (imageFile && clientName) {
// //     const reader = new FileReader();
// //     reader.onload = (event) => {
// //       const transformations = loadData('transformations');
// //       const newTransformation = {
// //         id: Date.now(),
// //         image: event.target.result,
// //         name: clientName
// //       };
      
// //       transformations.push(newTransformation);
// //       saveData('transformations', transformations);
// //       renderTransformations();
// //       closeModal('transformation-modal');
// //       form.reset();
// //     };
// //     reader.readAsDataURL(imageFile);
// //   }
// // });

// // function setupTransformationDeleteButtons() {
// //   document.querySelectorAll('.transformation-card .delete-btn').forEach(btn => {
// //     btn.addEventListener('click', (e) => {
// //       const card = e.target.closest('.transformation-card');
// //       const transId = parseInt(card.dataset.id);
// //       let transformations = loadData('transformations');
      
// //       transformations = transformations.filter(trans => trans.id !== transId);
// //       saveData('transformations', transformations);
// //       renderTransformations();
// //     });
// //   });
// // }

// // // ========================
// // // ADMINS FUNCTIONALITY
// // // ========================

// // function renderAdmins() {
// //   const admins = loadData('admins');
  
// //   adminsList.innerHTML = admins.map(admin => `
// //     <div class="admin-card" data-id="${admin.id}">
// //       <div>
// //         <h4>${admin.username}</h4>
// //         <p>${admin.email}</p>
// //       </div>
// //       <div class="card-actions">
// //         <button class="delete-btn"><i class="fas fa-trash"></i></button>
// //       </div>
// //     </div>
// //   `).join('');

// //   setupAdminDeleteButtons();
// // }

// // adminForm?.addEventListener('submit', (e) => {
// //   e.preventDefault();
// //   const form = e.target;
// //   const username = form.querySelector('input[type="text"]').value;
// //   const email = form.querySelector('input[type="email"]').value;
// //   const password = form.querySelector('input[type="password"]').value;
  
// //   if (username && email && password) {
// //     const admins = loadData('admins');
// //     const newAdmin = {
// //       id: Date.now(),
// //       username,
// //       email
// //       // In a real app, you would hash the password before storing
// //     };
    
// //     admins.push(newAdmin);
// //     saveData('admins', admins);
// //     renderAdmins();
// //     closeModal('admin-modal');
// //     form.reset();
// //   }
// // });

// // function setupAdminDeleteButtons() {
// //   document.querySelectorAll('.admin-card .delete-btn').forEach(btn => {
// //     btn.addEventListener('click', (e) => {
// //       const card = e.target.closest('.admin-card');
// //       const adminId = parseInt(card.dataset.id);
// //       let admins = loadData('admins');
      
// //       admins = admins.filter(admin => admin.id !== adminId);
// //       saveData('admins', admins);
// //       renderAdmins();
// //     });
// //   });
// // }

// // // ========================
// // // FEEDBACK FUNCTIONALITY
// // // ========================

// // function renderFeedback() {
// //   const feedback = loadData('feedback');
  
// //   feedbackList.innerHTML = feedback.map(item => `
// //     <div class="feedback-item" data-id="${item.id}">
// //       <div>
// //         <h4>${item.name}</h4>
// //         <p>${item.message}</p>
// //       </div>
// //       <div class="feedback-actions">
// //         <button class="accept-btn">${item.status === 'pending' ? 'Accept' : 'Accepted'}</button>
// //         <button class="delete-btn"><i class="fas fa-trash"></i></button>
// //       </div>
// //     </div>
// //   `).join('');

// //   setupFeedbackButtons();
// // }

// // function setupFeedbackButtons() {
// //   // Accept buttons
// //   document.querySelectorAll('.feedback-item .accept-btn').forEach(btn => {
// //     btn.addEventListener('click', (e) => {
// //       const item = e.target.closest('.feedback-item');
// //       const feedbackId = parseInt(item.dataset.id);
// //       let feedback = loadData('feedback');
      
// //       feedback = feedback.map(fb => 
// //         fb.id === feedbackId ? { ...fb, status: 'approved' } : fb
// //       );
      
// //       saveData('feedback', feedback);
// //       renderFeedback();
// //     });
// //   });

// //   // Delete buttons
// //   document.querySelectorAll('.feedback-item .delete-btn').forEach(btn => {
// //     btn.addEventListener('click', (e) => {
// //       const item = e.target.closest('.feedback-item');
// //       const feedbackId = parseInt(item.dataset.id);
// //       let feedback = loadData('feedback');
      
// //       feedback = feedback.filter(fb => fb.id !== feedbackId);
// //       saveData('feedback', feedback);
// //       renderFeedback();
// //     });
// //   });
// // }

// // // ========================
// // // UI FUNCTIONS
// // // ========================

// // // Sidebar Menu
// // let sideMenu = document.querySelectorAll(".nav-link");
// // sideMenu.forEach((item) => {
// //   let li = item.parentElement;

// //   item.addEventListener("click", () => {
// //     sideMenu.forEach((link) => {
// //       link.parentElement.classList.remove("active");
// //     });
// //     li.classList.add("active");
// //   });
// // });

// // // Toggle Sidebar
// // let menuBar = document.querySelector(".menu-btn");
// // let sideBar = document.querySelector(".sidebar");
// // menuBar.addEventListener("click", () => {
// //   sideBar.classList.toggle("hide");
// // });

// // // Dark Mode Toggle
// // let switchMode = document.getElementById("switch-mode");
// // switchMode.addEventListener("change", (e) => {
// //   if (e.target.checked) {
// //     document.body.classList.add("dark");
// //     localStorage.setItem('darkMode', 'enabled');
// //   } else {
// //     document.body.classList.remove("dark");
// //     localStorage.setItem('darkMode', 'disabled');
// //   }
// // });

// // // Check for saved dark mode preference
// // if (localStorage.getItem('darkMode') === 'enabled') {
// //   document.body.classList.add("dark");
// //   switchMode.checked = true;
// // }

// // // Search Functionality
// // let searchFrom = document.querySelector(".content nav form");
// // let searchBtn = document.querySelector(".search-btn");
// // let searchIcon = document.querySelector(".search-icon");
// // searchBtn.addEventListener("click", (e) => {
// //   if (window.innerWidth < 576) {
// //     e.preventDefault();
// //     searchFrom.classList.toggle("show");
// //     if (searchFrom.classList.contains("show")) {
// //       searchIcon.classList.replace("fa-search", "fa-times");
// //     } else {
// //       searchIcon.classList.replace("fa-times", "fa-search");
// //     }
// //   }
// // });

// // // Navigation
// // navLinks.forEach(link => {
// //   link.addEventListener('click', () => {
// //     modals.forEach(modal => {
// //       modal.style.display = 'none';
// //     });

// //     navLinks.forEach(l => l.classList.remove('active'));
// //     sections.forEach(s => s.classList.remove('active'));

// //     link.classList.add('active');
// //     const sectionId = link.getAttribute('data-section');
// //     document.getElementById(sectionId).classList.add('active');
// //   });
// // });

// // // Modal Management
// // function openModal(modalId) {
// //   document.getElementById(modalId).style.display = 'block';
// // }

// // function closeModal(modalId) {
// //   document.getElementById(modalId).style.display = 'none';
// // }

// // // Close modals
// // closeBtns.forEach(btn => {
// //   btn.addEventListener('click', () => {
// //     const modal = btn.closest('.modal');
// //     if (modal) {
// //       modal.style.display = 'none';
// //     }
// //   });
// // });

// // // Close modal when clicking outside
// // window.addEventListener('click', (e) => {
// //   modals.forEach(modal => {
// //     if (e.target === modal) {
// //       modal.style.display = 'none';
// //     }
// //   });
// // });

// // // Window Resize Handler
// // window.addEventListener("resize", () => {
// //   if (window.innerWidth > 576) {
// //     searchIcon.classList.replace("fa-times", "fa-search");
// //     searchFrom.classList.remove("show");
// //   }
// //   if (window.innerWidth < 768) {
// //     sideBar.classList.add("hide");
// //   }
// //   if (window.innerWidth < 1040) {
// //     sideBar.classList.add("hide");
// //     menuBar.style.display = "none";
// //   }     
// //   if (window.innerWidth > 1040) {
// //      menuBar.style.display = "block";
// //   }
// // });

// // // ========================
// // // INITIALIZATION
// // // ========================

// // document.addEventListener('DOMContentLoaded', () => {
// //   // Hide all modals on page load
// //   modals.forEach(modal => {
// //     modal.style.display = 'none';
// //   });

// //   // Load and render all data
// //   renderPackages();
// //   renderTransformations();
// //   renderAdmins();
// //   renderFeedback();

// //   // Set dashboard counts
// //   document.querySelector('.box-info li:nth-child(1) h2').textContent = 
// //     loadData('feedback').filter(fb => fb.status === 'pending').length;
// //   document.querySelector('.box-info li:nth-child(2) h2').textContent = 
// //     loadData('packages').length;
// //   document.querySelector('.box-info li:nth-child(3) h2').textContent = 
// //     loadData('transformations').length;

// //   // Setup modal buttons
// //   addPackageBtn?.addEventListener('click', () => {
// //     packageForm.reset();
// //     packageForm.querySelector('.submit-btn').textContent = 'Save Package';
// //     delete packageForm.dataset.id;
// //     openModal('package-modal');
// //   });

// //   addTransformationBtn?.addEventListener('click', () => {
// //     transformationForm.reset();
// //     openModal('transformation-modal');
// //   });

// //   addAdminBtn?.addEventListener('click', () => {
// //     adminForm.reset();
// //     openModal('admin-modal');
// //   });

// //   // Logout handler
// //   logoutBtn?.addEventListener('click', () => {
// //     // In a real app, you would clear session/tokens here
// //     window.location.href = 'index.html';
// //   });
// // });




// /* Created by Mohamed Elsayed*/

// // ========================
// // DOM ELEMENTS
// // ========================
// const navLinks = document.querySelectorAll('.side-menu li');
// const addTransformationBtn = document.getElementById('add-transformation-btn');
// const addPackageBtn = document.getElementById('add-package-btn');
// const addAdminBtn = document.getElementById('add-admin-btn');
// const logoutBtn = document.querySelector('.logout');
// const closeBtns = document.querySelectorAll('.close');
// const modals = document.querySelectorAll('.modal');
// const sections = document.querySelectorAll('.content-section');
// const feedbackList = document.querySelector('.feedback-list');
// const packagesGrid = document.querySelector('.packages-grid');
// const transformationsGrid = document.querySelector('.transformations-grid');
// const adminsList = document.querySelector('.admins-list');
// const packageForm = document.getElementById('package-form');
// const transformationForm = document.getElementById('transformation-form');
// const adminForm = document.getElementById('admin-form');

// // ========================
// // DATA STORAGE
// // ========================

// const DEFAULT_DATA = {
//   packages: [
//     { id: 1, name: 'Basic Plan', price: 99, details: '3 sessions per week\nBasic exercises' },
//     { id: 2, name: 'Premium Plan', price: 199, details: '5 sessions per week\nNutrition plan\nPersonal trainer' }
//   ],
//   transformations: [
//     { id: 1, image: 'https://source.unsplash.com/random/300x300?fitness', name: 'Client 1' },
//     { id: 2, image: 'https://source.unsplash.com/random/300x300?gym', name: 'Client 2' }
//   ],
//   admins: [
//     { id: 1, username: 'admin1', email: 'admin1@example.com' }
//   ],
//   feedback: [
//     { id: 1, name: 'John Doe', message: 'Great training program!', status: 'pending' },
//     { id: 2, name: 'Jane Smith', message: 'Amazing results in just 3 months.', status: 'approved' }
//   ]
// };

// function saveData(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }

// function loadData(key) {
//   const storedData = localStorage.getItem(key);
//   return storedData ? JSON.parse(storedData) : DEFAULT_DATA[key];
// }

// // ========================
// // PACKAGES FUNCTIONALITY (Updated to handle line breaks)
// // ========================

// /* In the renderPackages function, update the package card template */
// function renderPackages() {
//   const packages = loadData('packages');
  
//   packagesGrid.innerHTML = packages.map(pkg => {
//     // Split details by newline and add bullet points
//     const formattedDetails = pkg.details
//       .split('\n')
//       .map(line => line.trim())
//       .filter(line => line.length > 0)
//       .map(line => `• ${line}`)
//       .join('<br>');
    
//     return `
//     <div class="package-card" data-id="${pkg.id}">
//       <h3>${pkg.name}</h3>
//       <p class="price">$${pkg.price}</p>
//       <div class="details">${formattedDetails}</div>
//       <div class="card-actions">
//         <button class="edit-btn"><i class="fas fa-edit"></i></button>
//         <button class="delete-btn"><i class="fas fa-trash"></i></button>
//       </div>
//     </div>
//     `;
//   }).join('');

//   setupPackageEditButtons();
//   setupPackageDeleteButtons();
// }

// function loadPackageIntoModal(packageData) {
//   packageForm.dataset.id = packageData.id;
//   packageForm.querySelector('input[type="text"]').value = packageData.name;
//   packageForm.querySelector('input[type="number"]').value = packageData.price;
//   packageForm.querySelector('textarea').value = packageData.details;
//   packageForm.querySelector('.submit-btn').textContent = 'Update Package';
// }

// function setupPackageEditButtons() {
//   document.querySelectorAll('.edit-btn').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       const packageCard = e.target.closest('.package-card');
//       const packageId = parseInt(packageCard.dataset.id);
//       const packages = loadData('packages');
//       const packageToEdit = packages.find(pkg => pkg.id === packageId);
      
//       if (packageToEdit) {
//         loadPackageIntoModal(packageToEdit);
//         openModal('package-modal');
//       }
//     });
//   });
// }

// function setupPackageDeleteButtons() {
//   document.querySelectorAll('.package-card .delete-btn').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       const packageCard = e.target.closest('.package-card');
//       const packageId = parseInt(packageCard.dataset.id);
//       let packages = loadData('packages');
      
//       packages = packages.filter(pkg => pkg.id !== packageId);
//       saveData('packages', packages);
//       renderPackages();
//     });
//   });
// }

// packageForm?.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const form = e.target;
//   const packageId = form.dataset.id ? parseInt(form.dataset.id) : null;
//   const name = form.querySelector('input[type="text"]').value;
//   const price = parseFloat(form.querySelector('input[type="number"]').value);
//   const details = form.querySelector('textarea').value;
  
//   let packages = loadData('packages');
  
//   if (packageId) {
//     packages = packages.map(pkg => 
//       pkg.id === packageId ? { ...pkg, name, price, details } : pkg
//     );
//   } else {
//     const newPackage = {
//       id: Date.now(),
//       name,
//       price,
//       details
//     };
//     packages.push(newPackage);
//   }
  
//   saveData('packages', packages);
//   renderPackages();
//   closeModal('package-modal');
//   form.reset();
//   form.querySelector('.submit-btn').textContent = 'Save Package';
//   delete form.dataset.id;
// });

// // ========================
// // TRANSFORMATIONS FUNCTIONALITY 
// // ========================

// /* Update the renderTransformations function */
// function renderTransformations() {
//   const transformations = loadData('transformations');
  
//   transformationsGrid.innerHTML = transformations.map(trans => `
//     <div class="transformation-card" data-id="${trans.id}">
//       <div class="transformation-image-container">
//         <img src="${trans.image}" alt="${trans.name}'s transformation" class="transformation-image">
//       </div>
//       <div class="transformation-info">
//         <h4>${trans.name}</h4>
//         <div class="card-actions">
//           <button class="delete-btn"><i class="fas fa-trash"></i></button>
//         </div>
//       </div>
//     </div>
//   `).join('');

//   setupTransformationDeleteButtons();
// }

// /* Update the transformation form submission */
// transformationForm?.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const form = e.target;
//   const imageFile = form.querySelector('input[type="file"]').files[0];
//   const clientName = form.querySelector('input[type="text"]').value;
  
//   if (imageFile && clientName) {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const transformations = loadData('transformations');
//       const newTransformation = {
//         id: Date.now(),
//         image: event.target.result,
//         name: clientName
//       };
      
//       transformations.push(newTransformation);
//       saveData('transformations', transformations);
//       renderTransformations();
//       closeModal('transformation-modal');
//       form.reset();
//     };
//     reader.readAsDataURL(imageFile);
//   }
// });

// // First, let's modify the initialization to prevent duplicate event listeners
// function initializeTransformations() {
//   // Remove any existing event listener first
//   transformationForm?.removeEventListener('submit', handleTransformationSubmit);
//   // Add the event listener
//   transformationForm?.addEventListener('submit', handleTransformationSubmit);
//   renderTransformations();
// }

// // Separate the submission handler into its own function
// function handleTransformationSubmit(e) {
//   e.preventDefault();
//   const form = e.target;
//   const imageFile = form.querySelector('input[type="file"]').files[0];
//   const clientName = form.querySelector('input[type="text"]').value;
  
//   if (imageFile && clientName) {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const transformations = loadData('transformations');
//       const newTransformation = {
//         id: Date.now(),
//         image: event.target.result,
//         name: clientName
//       };
      
//       transformations.push(newTransformation);
//       saveData('transformations', transformations);
//       renderTransformations();
//       closeModal('transformation-modal');
//       form.reset();
//     };
//     reader.readAsDataURL(imageFile);
//   }
// }

// // Update the DOMContentLoaded initialization
// document.addEventListener('DOMContentLoaded', () => {
//   modals.forEach(modal => {
//     modal.style.display = 'none';
//   });

//   // Initialize all components
//   renderPackages();
//   initializeTransformations();  // Changed from renderTransformations()
//   renderAdmins();
//   renderFeedback();

//   // ... rest of your initialization code ...
// });

// // Update the addTransformationBtn event listener
// addTransformationBtn?.addEventListener('click', () => {
//   transformationForm.reset();
//   openModal('transformation-modal');
// });

// transformationForm?.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const form = e.target;
//   const imageFile = form.querySelector('input[type="file"]').files[0];
//   const clientName = form.querySelector('input[type="text"]').value;
  
//   if (imageFile && clientName) {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const transformations = loadData('transformations');
//       const newTransformation = {
//         id: Date.now(),
//         image: event.target.result,
//         name: clientName
//       };
      
//       transformations.push(newTransformation);
//       saveData('transformations', transformations);
//       renderTransformations();
//       closeModal('transformation-modal');
//       form.reset();
//     };
//     reader.readAsDataURL(imageFile);
//   }
// });

// function setupTransformationDeleteButtons() {
//   document.querySelectorAll('.transformation-card .delete-btn').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       const card = e.target.closest('.transformation-card');
//       const transId = parseInt(card.dataset.id);
//       let transformations = loadData('transformations');
      
//       transformations = transformations.filter(trans => trans.id !== transId);
//       saveData('transformations', transformations);
//       renderTransformations();
//     });
//   });
// }

// // ========================
// // ADMINS FUNCTIONALITY
// // ========================

// function renderAdmins() {
//   const admins = loadData('admins');
  
//   adminsList.innerHTML = admins.map(admin => `
//     <div class="admin-card" data-id="${admin.id}">
//       <div>
//         <h4>${admin.username}</h4>
//         <p>${admin.email}</p>
//       </div>
//       <div class="card-actions">
//         <button class="delete-btn"><i class="fas fa-trash"></i></button>
//       </div>
//     </div>
//   `).join('');

//   setupAdminDeleteButtons();
// }

// adminForm?.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const form = e.target;
//   const username = form.querySelector('input[type="text"]').value;
//   const email = form.querySelector('input[type="email"]').value;
//   const password = form.querySelector('input[type="password"]').value;
  
//   if (username && email && password) {
//     const admins = loadData('admins');
//     const newAdmin = {
//       id: Date.now(),
//       username,
//       email
//     };
    
//     admins.push(newAdmin);
//     saveData('admins', admins);
//     renderAdmins();
//     closeModal('admin-modal');
//     form.reset();
//   }
// });

// function setupAdminDeleteButtons() {
//   document.querySelectorAll('.admin-card .delete-btn').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       const card = e.target.closest('.admin-card');
//       const adminId = parseInt(card.dataset.id);
//       let admins = loadData('admins');
      
//       admins = admins.filter(admin => admin.id !== adminId);
//       saveData('admins', admins);
//       renderAdmins();
//     });
//   });
// }

// // ========================
// // FEEDBACK FUNCTIONALITY
// // ========================

// function renderFeedback() {
//   const feedback = loadData('feedback');
  
//   feedbackList.innerHTML = feedback.map(item => `
//     <div class="feedback-item" data-id="${item.id}">
//       <div>
//         <h4>${item.name}</h4>
//         <p>${item.message}</p>
//       </div>
//       <div class="feedback-actions">
//         <button class="accept-btn">${item.status === 'pending' ? 'Accept' : 'Accepted'}</button>
//         <button class="delete-btn"><i class="fas fa-trash"></i></button>
//       </div>
//     </div>
//   `).join('');

//   setupFeedbackButtons();
// }

// function setupFeedbackButtons() {
//   document.querySelectorAll('.feedback-item .accept-btn').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       const item = e.target.closest('.feedback-item');
//       const feedbackId = parseInt(item.dataset.id);
//       let feedback = loadData('feedback');
      
//       feedback = feedback.map(fb => 
//         fb.id === feedbackId ? { ...fb, status: 'approved' } : fb
//       );
      
//       saveData('feedback', feedback);
//       renderFeedback();
//     });
//   });

//   document.querySelectorAll('.feedback-item .delete-btn').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       const item = e.target.closest('.feedback-item');
//       const feedbackId = parseInt(item.dataset.id);
//       let feedback = loadData('feedback');
      
//       feedback = feedback.filter(fb => fb.id !== feedbackId);
//       saveData('feedback', feedback);
//       renderFeedback();
//     });
//   });
// }

// // ========================
// // UI FUNCTIONS
// // ========================

// let sideMenu = document.querySelectorAll(".nav-link");
// sideMenu.forEach((item) => {
//   let li = item.parentElement;

//   item.addEventListener("click", () => {
//     sideMenu.forEach((link) => {
//       link.parentElement.classList.remove("active");
//     });
//     li.classList.add("active");
//   });
// });

// let menuBar = document.querySelector(".menu-btn");
// let sideBar = document.querySelector(".sidebar");
// menuBar.addEventListener("click", () => {
//   sideBar.classList.toggle("hide");
// });

// let switchMode = document.getElementById("switch-mode");
// switchMode.addEventListener("change", (e) => {
//   if (e.target.checked) {
//     document.body.classList.add("dark");
//     localStorage.setItem('darkMode', 'enabled');
//   } else {
//     document.body.classList.remove("dark");
//     localStorage.setItem('darkMode', 'disabled');
//   }
// });

// if (localStorage.getItem('darkMode') === 'enabled') {
//   document.body.classList.add("dark");
//   switchMode.checked = true;
// }

// let searchFrom = document.querySelector(".content nav form");
// let searchBtn = document.querySelector(".search-btn");
// let searchIcon = document.querySelector(".search-icon");
// searchBtn.addEventListener("click", (e) => {
//   if (window.innerWidth < 576) {
//     e.preventDefault();
//     searchFrom.classList.toggle("show");
//     if (searchFrom.classList.contains("show")) {
//       searchIcon.classList.replace("fa-search", "fa-times");
//     } else {
//       searchIcon.classList.replace("fa-times", "fa-search");
//     }
//   }
// });

// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     modals.forEach(modal => {
//       modal.style.display = 'none';
//     });

//     navLinks.forEach(l => l.classList.remove('active'));
//     sections.forEach(s => s.classList.remove('active'));

//     link.classList.add('active');
//     const sectionId = link.getAttribute('data-section');
//     document.getElementById(sectionId).classList.add('active');
//   });
// });

// function openModal(modalId) {
//   document.getElementById(modalId).style.display = 'block';
// }

// function closeModal(modalId) {
//   document.getElementById(modalId).style.display = 'none';
// }

// closeBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const modal = btn.closest('.modal');
//     if (modal) {
//       modal.style.display = 'none';
//     }
//   });
// });

// window.addEventListener('click', (e) => {
//   modals.forEach(modal => {
//     if (e.target === modal) {
//       modal.style.display = 'none';
//     }
//   });
// });

// window.addEventListener("resize", () => {
//   if (window.innerWidth > 576) {
//     searchIcon.classList.replace("fa-times", "fa-search");
//     searchFrom.classList.remove("show");
//   }
//   if (window.innerWidth < 768) {
//     sideBar.classList.add("hide");
//   }
//   if (window.innerWidth < 1040) {
//     sideBar.classList.add("hide");
//     menuBar.style.display = "none";
//   }     
//   if (window.innerWidth > 1040) {
//      menuBar.style.display = "block";
//   }
// });

// // ========================
// // INITIALIZATION
// // ========================

// document.addEventListener('DOMContentLoaded', () => {
// // In your DOMContentLoaded or initialization section:
// transformationForm?.removeEventListener('submit', handleTransformationSubmit);
// transformationForm?.addEventListener('submit', handleTransformationSubmit);

//   modals.forEach(modal => {
//     modal.style.display = 'none';
//   });

//   renderPackages();
//   renderTransformations();
//   renderAdmins();
//   renderFeedback();

//   document.querySelector('.box-info li:nth-child(1) h2').textContent = 
//     loadData('feedback').filter(fb => fb.status === 'pending').length;
//   document.querySelector('.box-info li:nth-child(2) h2').textContent = 
//     loadData('packages').length;
//   document.querySelector('.box-info li:nth-child(3) h2').textContent = 
//     loadData('transformations').length;

//   addPackageBtn?.addEventListener('click', () => {
//     packageForm.reset();
//     packageForm.querySelector('.submit-btn').textContent = 'Save Package';
//     delete packageForm.dataset.id;
//     openModal('package-modal');
//   });

//   addTransformationBtn?.addEventListener('click', () => {
//     transformationForm.reset();
//     openModal('transformation-modal');
//   });

//   addAdminBtn?.addEventListener('click', () => {
//     adminForm.reset();
//     openModal('admin-modal');
//   });

//   logoutBtn?.addEventListener('click', () => {
//     window.location.href = 'index.html';
//   });
// });
















/* Created by Mohamed Elsayed - Final Version */

// ========================
// DOM ELEMENTS
// ========================
const navLinks = document.querySelectorAll('.side-menu li');
const addTransformationBtn = document.getElementById('add-transformation-btn');
const addPackageBtn = document.getElementById('add-package-btn');
const addAdminBtn = document.getElementById('add-admin-btn');
const logoutBtn = document.querySelector('.logout');
const closeBtns = document.querySelectorAll('.close');
const modals = document.querySelectorAll('.modal');
const sections = document.querySelectorAll('.content-section');
const feedbackList = document.querySelector('.feedback-list');
const packagesGrid = document.querySelector('.packages-grid');
const transformationsGrid = document.querySelector('.transformations-grid');
const adminsList = document.querySelector('.admins-list');
const packageForm = document.getElementById('package-form');
const transformationForm = document.getElementById('transformation-form');
const adminForm = document.getElementById('admin-form');

// ========================
// DATA STORAGE
// ========================
const DEFAULT_DATA = {
  packages: [
    { id: 1, name: 'Basic Plan', price: 99, details: '3 sessions per week\nBasic exercises' },
    { id: 2, name: 'Premium Plan', price: 199, details: '5 sessions per week\nNutrition plan\nPersonal trainer' }
  ],
  transformations: [
    { id: 1, image: 'https://source.unsplash.com/random/300x300?fitness', name: 'Client 1' },
    { id: 2, image: 'https://source.unsplash.com/random/300x300?gym', name: 'Client 2' }
  ],
  admins: [
    { id: 1, username: 'admin1', email: 'admin1@example.com' }
  ],
  feedback: [
    { id: 1, name: 'John Doe', message: 'Great training program!', status: 'pending' },
    { id: 2, name: 'Jane Smith', message: 'Amazing results in just 3 months.', status: 'approved' }
  ]
};

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadData(key) {
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : DEFAULT_DATA[key];
}

// ========================
// PACKAGES FUNCTIONALITY
// ========================
function renderPackages() {
  const packages = loadData('packages');
  
  packagesGrid.innerHTML = packages.map(pkg => {
    const formattedDetails = pkg.details
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => `• ${line}`)
      .join('<br>');
    
    return `
    <div class="package-card" data-id="${pkg.id}">
      <h3>${pkg.name}</h3>
      <p class="price">$${pkg.price}</p>
      <div class="details">${formattedDetails}</div>
      <div class="card-actions">
        <button class="edit-btn"><i class="fas fa-edit"></i></button>
        <button class="delete-btn"><i class="fas fa-trash"></i></button>
      </div>
    </div>
    `;
  }).join('');

  setupPackageEditButtons();
  setupPackageDeleteButtons();
}

function loadPackageIntoModal(packageData) {
  packageForm.dataset.id = packageData.id;
  packageForm.querySelector('input[type="text"]').value = packageData.name;
  packageForm.querySelector('input[type="number"]').value = packageData.price;
  packageForm.querySelector('textarea').value = packageData.details;
  packageForm.querySelector('.submit-btn').textContent = 'Update Package';
}

function setupPackageEditButtons() {
  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const packageCard = e.target.closest('.package-card');
      const packageId = parseInt(packageCard.dataset.id);
      const packages = loadData('packages');
      const packageToEdit = packages.find(pkg => pkg.id === packageId);
      
      if (packageToEdit) {
        loadPackageIntoModal(packageToEdit);
        openModal('package-modal');
      }
    });
  });
}

function setupPackageDeleteButtons() {
  document.querySelectorAll('.package-card .delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const packageCard = e.target.closest('.package-card');
      const packageId = parseInt(packageCard.dataset.id);
      let packages = loadData('packages');
      
      packages = packages.filter(pkg => pkg.id !== packageId);
      saveData('packages', packages);
      renderPackages();
    });
  });
}

packageForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const packageId = form.dataset.id ? parseInt(form.dataset.id) : null;
  const name = form.querySelector('input[type="text"]').value;
  const price = parseFloat(form.querySelector('input[type="number"]').value);
  const details = form.querySelector('textarea').value;
  
  let packages = loadData('packages');
  
  if (packageId) {
    packages = packages.map(pkg => 
      pkg.id === packageId ? { ...pkg, name, price, details } : pkg
    );
  } else {
    const newPackage = {
      id: Date.now(),
      name,
      price,
      details
    };
    packages.push(newPackage);
  }
  
  saveData('packages', packages);
  renderPackages();
  closeModal('package-modal');
  form.reset();
  form.querySelector('.submit-btn').textContent = 'Save Package';
  delete form.dataset.id;
});

// ========================
// TRANSFORMATIONS FUNCTIONALITY (Fixed duplicate issue)
// ========================
let transformationFormHandler = null;

function initializeTransformations() {
  // Remove previous handler if exists
  if (transformationFormHandler) {
    transformationForm.removeEventListener('submit', transformationFormHandler);
  }
  
  // Create new handler
  transformationFormHandler = function(e) {
    e.preventDefault();
    const form = e.target;
    const imageFile = form.querySelector('input[type="file"]').files[0];
    const clientName = form.querySelector('input[type="text"]').value;
    
    if (imageFile && clientName) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const transformations = loadData('transformations');
        const newTransformation = {
          id: Date.now(),
          image: event.target.result,
          name: clientName
        };
        
        transformations.push(newTransformation);
        saveData('transformations', transformations);
        renderTransformations();
        closeModal('transformation-modal');
        form.reset();
      };
      reader.readAsDataURL(imageFile);
    }
  };
  
  // Add the handler
  transformationForm.addEventListener('submit', transformationFormHandler);
  renderTransformations();
}

function renderTransformations() {
  const transformations = loadData('transformations');
  
  transformationsGrid.innerHTML = transformations.map(trans => `
    <div class="transformation-card" data-id="${trans.id}">
      <div class="transformation-image-container">
        <img src="${trans.image}" alt="${trans.name}'s transformation" class="transformation-image">
      </div>
      <div class="transformation-info">
        <h4>${trans.name}</h4>
        <div class="card-actions">
          <button class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>
  `).join('');

  setupTransformationDeleteButtons();
}

function setupTransformationDeleteButtons() {
  document.querySelectorAll('.transformation-card .delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.transformation-card');
      const transId = parseInt(card.dataset.id);
      let transformations = loadData('transformations');
      
      transformations = transformations.filter(trans => trans.id !== transId);
      saveData('transformations', transformations);
      renderTransformations();
    });
  });
}

// ========================
// ADMINS FUNCTIONALITY
// ========================
function renderAdmins() {
  const admins = loadData('admins');
  
  adminsList.innerHTML = admins.map(admin => `
    <div class="admin-card" data-id="${admin.id}">
      <div>
        <h4>${admin.username}</h4>
        <p>${admin.email}</p>
      </div>
      <div class="card-actions">
        <button class="delete-btn"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');

  setupAdminDeleteButtons();
}

adminForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const username = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;
  
  if (username && email && password) {
    const admins = loadData('admins');
    const newAdmin = {
      id: Date.now(),
      username,
      email
    };
    
    admins.push(newAdmin);
    saveData('admins', admins);
    renderAdmins();
    closeModal('admin-modal');
    form.reset();
  }
});

function setupAdminDeleteButtons() {
  document.querySelectorAll('.admin-card .delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.admin-card');
      const adminId = parseInt(card.dataset.id);
      let admins = loadData('admins');
      
      admins = admins.filter(admin => admin.id !== adminId);
      saveData('admins', admins);
      renderAdmins();
    });
  });
}

// ========================
// FEEDBACK FUNCTIONALITY
// ========================
function renderFeedback() {
  const feedback = loadData('feedback');
  
  feedbackList.innerHTML = feedback.map(item => `
    <div class="feedback-item" data-id="${item.id}">
      <div>
        <h4>${item.name}</h4>
        <p>${item.message}</p>
      </div>
      <div class="feedback-actions">
        <button class="accept-btn">${item.status === 'pending' ? 'Accept' : 'Accepted'}</button>
        <button class="delete-btn"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');

  setupFeedbackButtons();
}

function setupFeedbackButtons() {
  document.querySelectorAll('.feedback-item .accept-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const item = e.target.closest('.feedback-item');
      const feedbackId = parseInt(item.dataset.id);
      let feedback = loadData('feedback');
      
      feedback = feedback.map(fb => 
        fb.id === feedbackId ? { ...fb, status: 'approved' } : fb
      );
      
      saveData('feedback', feedback);
      renderFeedback();
    });
  });

  document.querySelectorAll('.feedback-item .delete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const item = e.target.closest('.feedback-item');
      const feedbackId = parseInt(item.dataset.id);
      let feedback = loadData('feedback');
      
      feedback = feedback.filter(fb => fb.id !== feedbackId);
      saveData('feedback', feedback);
      renderFeedback();
    });
  });
}

// ========================
// UI FUNCTIONS
// ========================
let sideMenu = document.querySelectorAll(".nav-link");
sideMenu.forEach((item) => {
  let li = item.parentElement;

  item.addEventListener("click", () => {
    sideMenu.forEach((link) => {
      link.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

let menuBar = document.querySelector(".menu-btn");
let sideBar = document.querySelector(".sidebar");
menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("hide");
 });

let switchMode = document.getElementById("switch-mode");
switchMode.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark");
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem('darkMode', 'disabled');
  }
});

if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add("dark");
  switchMode.checked = true;
}

let searchFrom = document.querySelector(".content nav form");
let searchBtn = document.querySelector(".search-btn");
let searchIcon = document.querySelector(".search-icon");
searchBtn.addEventListener("click", (e) => {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchFrom.classList.toggle("show");
    if (searchFrom.classList.contains("show")) {
      searchIcon.classList.replace("fa-search", "fa-times");
    } else {
      searchIcon.classList.replace("fa-times", "fa-search");
    }
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    modals.forEach(modal => {
      modal.style.display = 'none';
    });

    navLinks.forEach(l => l.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    link.classList.add('active');
    const sectionId = link.getAttribute('data-section');
    document.getElementById(sectionId).classList.add('active');
  });
});

function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    if (modal) {
      modal.style.display = 'none';
    }
  });
});

window.addEventListener('click', (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 576) {
    searchIcon.classList.replace("fa-times", "fa-search");
    searchFrom.classList.remove("show");
  }
  if (window.innerWidth < 768) {
    sideBar.classList.add("hide");
  }
  if (window.innerWidth < 1040) {
    sideBar.classList.add("hide");
    menuBar.style.display = "none";
  }     
  if (window.innerWidth > 1040) {
     menuBar.style.display = "block";
  }
});

// ========================
// INITIALIZATION
// ========================
document.addEventListener('DOMContentLoaded', () => {
  modals.forEach(modal => {
    modal.style.display = 'none';
  });

  renderPackages();
  initializeTransformations(); // Fixed transformations initialization
  renderAdmins();
  renderFeedback();

  // Set dashboard counts
  document.querySelector('.box-info li:nth-child(1) h2').textContent = 
    loadData('feedback').filter(fb => fb.status === 'pending').length;
  document.querySelector('.box-info li:nth-child(2) h2').textContent = 
    loadData('packages').length;
  document.querySelector('.box-info li:nth-child(3) h2').textContent = 
    loadData('transformations').length;

  addPackageBtn?.addEventListener('click', () => {
    packageForm.reset();
    packageForm.querySelector('.submit-btn').textContent = 'Save Package';
    delete packageForm.dataset.id;
    openModal('package-modal');
  });

  addTransformationBtn?.addEventListener('click', () => {
    transformationForm.reset();
    openModal('transformation-modal');
  });

  addAdminBtn?.addEventListener('click', () => {
    adminForm.reset();
    openModal('admin-modal');
  });

  logoutBtn?.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});