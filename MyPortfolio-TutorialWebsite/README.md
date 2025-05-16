# Folder Structure 
/my-portfolio-tutorial-site
├── /public                   # Static files (favicon, images, etc.)
│   ├── index.html
│   └── ...
├── /src
│   ├── /assets               # Images, fonts, or other static assets
│   ├── /components           # Reusable components (Navbar, Sidebar, etc.)
│   │   ├── Navbar.jsx        # Main top navbar
│   │   ├── Sidebar.jsx       # Sidebar for React tutorials
│   │   └── SearchBar.jsx     # Search bar for React tutorials (or other feature components)
│   ├── /pages                # Different pages of the site (React tutorials, portfolio, etc.)
│   │   ├── Home.jsx          # Home page (landing page)
│   │   ├── ReactTutorials.jsx# React tutorials section
│   │   ├── NodeTutorials.jsx # Node.js tutorials section
│   │   ├── Projects.jsx      # Projects page
│   │   ├── Portfolio.jsx     # Portfolio page
│   │   └── ...
│   ├── /styles               # Custom CSS files for extra styling (Bootstrap overrides, etc.)
│   │   └── main.css          # Global styles (fonts, colors, etc.)
│   ├── App.js                # Main React component (holds routes and layout)
│   ├── index.js              # Entry point for React (renders App.js)
│   └── ...
├── /node_modules             # Project dependencies
├── package.json              # Project configuration and dependencies
└── README.md                 # Documentation for the project
