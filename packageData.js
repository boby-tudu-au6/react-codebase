const data = (name) => ({
    "name": name,
    "version": "0.1.0",
    "private": true,
    "dependencies": {
        "@emotion/react": "^11.4.1",
        "@emotion/styled": "^11.3.0",
        "@mui/icons-material": "^5.0.3",
        "@mui/material": "^5.0.3",
        "@testing-library/jest-dom": "^5.11.4",
        "@testing-library/react": "^11.1.0",
        "@testing-library/user-event": "^12.1.10",
        "axios": "^0.23.0",
        "formik": "^2.2.9",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-redux": "^7.2.5",
        "react-router-dom": "^5.3.0",
        "react-scripts": "4.0.3",
        "redux": "^4.1.1",
        "redux-thunk": "^2.3.0",
        "web-vitals": "^1.0.1",
        "yup": "^0.32.11"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    }
});

module.exports = data