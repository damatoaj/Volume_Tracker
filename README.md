# Volume Tracker  
  [Check it out here](https://cardio-volume-tracker.herokuapp.com/)
  
# Purpose
  Volume Tracker is a mobile friendly Next.js site designed to track cardiovascular training regimens by
  allowing users to upload information about their workouts. After their relevant data is uploaded,
  the site calculates Volume (a measure of intensity which is modality independent), then graphs it along with other     variables for the user to see.
  
# Next Steps
  A. Add more data points for users to see their minimum and maximum scores.
  B. Add in exercise types to the models, so users can distinguish whether they are running, walking etc.

# Models
  A. User
    1. Attribues
      a. fname: string
      b. lname: string
      c. email: string
      d. password: string
  B. Workouts
    1. Attributes
      a. date: Date
      b. minutes: integer
      c. heartRate: integer
      d. userId: integer
      e. volume: integer
# Technologies Used
  1. PostgreSQL
  2. HTML
  3. CSS
  4. JavaScript
  5. React-BootStrap
  6. Recharts
  7. Next.js
  8. Bcrypt
  
