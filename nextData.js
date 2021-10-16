export default function data(name) {
    return ({
        "name": name,
        "version": "0.1.0",
        "private": true,
        "scripts": {
            "dev": "next dev",
            "build": "next build",
            "start": "next start",
            "lint": "next lint"
        },
        "dependencies": {
            "@emotion/react": "^11.4.1",
            "@emotion/styled": "^11.3.0",
            "@mui/icons-material": "^5.0.4",
            "@mui/material": "^5.0.4",
            "axios": "^0.23.0",
            "next": "11.1.2",
            "react": "17.0.2",
            "react-dom": "17.0.2",
            "react-redux": "^7.2.5",
            "redux": "^4.1.1",
            "redux-thunk": "^2.3.0"
        },
        "devDependencies": {
            "eslint": "8.0.1",
            "eslint-config-next": "11.1.2"
        }

    })
}