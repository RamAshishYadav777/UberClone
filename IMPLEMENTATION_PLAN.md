# UberClone Implementation Plan

## Phase 1: Core Ride Logic (Backend)
- [ ] **Maps Integration**: Implement Google Maps API for geolocation, distance, and autocomplete.
    - `maps.service.js`
    - `map.controller.js`
    - `maps.routes.js`
- [ ] **Ride Management**:
    - `ride.model.js`: Schema for ride requests.
    - `ride.service.js`: Logic to create rides and calculate fares.
    - `ride.controller.js`: Handle ride requests.
    - `ride.routes.js`: API endpoints for rides.

## Phase 2: Frontend Dashboard
- [ ] **Setup**: Install `axios`, `remixicon`, `gsap`.
- [ ] **Refactor**: Rename current `Home.jsx` to `Start.jsx` (Landing page).
- [ ] **New Home.jsx**: Create the main User Dashboard.
    - Search Panel (Pickup/Destination).
    - Vehicle Selection (UberGo, Moto, Auto).
    - Map Background (Visual).
- [ ] **State Management**: Handle user input and fare display.

## Phase 3: Driver Dashboard
- [ ] **Driver UI**: Interface for drivers to see ride requests.
- [ ] **Ride Acceptance**: Logic to accept rides.

## Phase 4: Real-time Communication
- [ ] **Socket.io**: Integrate for real-time updates between User and Driver.

## Phase 5: Polish
- [ ] Payment Integration.
- [ ] Route Visualization.
