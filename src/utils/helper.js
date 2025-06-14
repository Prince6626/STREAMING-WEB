let nameList = [
    "Aarav", "Aarya", "Abhay", "Abhijeet", "Aditya", "Advait", "Aisha", "Ajay", "Akanksha", "Akash",
    "Alok", "Aman", "Amisha", "Amit", "Amrita", "Ananya", "Aniket", "Anil", "Anisha", "Anita",
    "Anjali", "Ankur", "Ansh", "Anshika", "Anupam", "Anurag", "Aparna", "Arjun", "Arnav", "Aryan",
    "Ashish", "Ashwini", "Asif", "Atul", "Avani", "Avinash", "Ayush", "Bharat", "Bhavya", "Bhuvan",
    "Chaitanya", "Chandan", "Chetan", "Chirag", "Daksha", "Damini", "Darshan", "Deepak", "Deepali", "Dev",
    "Devansh", "Devika", "Dhananjay", "Dhara", "Dheeraj", "Dhruv", "Diksha", "Divya", "Eesha", "Eshwar",
    "Fahad", "Farhan", "Firoz", "Gagan", "Gauri", "Gautam", "Gayatri", "Gopal", "Gulshan", "Hardeep",
    "Hardik", "Harini", "Harsh", "Harsha", "Harshita", "Heena", "Hemant", "Himani", "Hitesh", "Ibrahim",
    "Ila", "Imran", "Inder", "Indira", "Ishaan", "Ishita", "Jagdish", "Jagmohan", "Jai", "Janhvi",
    "Jaspreet", "Jatin", "Jayant", "Jayesh", "Jitendra", "Juhi", "Kajal", "Kamal", "Kanchan", "Karan",
    "Karthik", "Kavita", "Kiran", "Kirti", "Kishan", "Krishna", "Kunal", "Lakshmi", "Lalit", "Laxman",
    "Leela", "Lokesh", "Madhavi", "Madhur", "Mahesh", "Mahima", "Mallika", "Manav", "Manish", "Meera",
    "Megha", "Mihir", "Mira", "Mohit", "Mona", "Mukesh", "Muskan", "Naina", "Namita", "Nandini",
    "Naveen", "Navya", "Neelam", "Neeraj", "Nidhi", "Niharika", "Nikhil", "Nilesh", "Nimisha", "Niraj",
    "Nirupama", "Nisha", "Nitin", "Omkar", "Pankaj", "Parth", "Parvati", "Piyush", "Pradeep", "Pragya",
    "Prajakta", "Pranav", "Prasad", "Prateek", "Pratham", "Preeti", "Priya", "Puja", "Rahul", "Raj",
    "Rajat", "Rajesh", "Rakesh", "Ramesh", "Rashmi", "Ravi", "Rekha", "Reshma", "Richa", "Rishabh",
    "Ritesh", "Ritika", "Rohan", "Rohit", "Rupali", "Sachin", "Sagar", "Sahil", "Sakshi", "Salman",
    "Sameer", "Sandeep", "Sandhya", "Sanjay", "Sanket", "Santoshi", "Sarita", "Sarthak", "Sarvesh", "Shaheen",
    "Sharad", "Sharvani", "Sheetal", "Shefali", "Shikha", "Shilpa", "Shiv", "Shivani", "Shraddha", "Shreya",
    "Shruti", "Simran", "Sohail", "Sonia", "Soumya", "Sourabh", "Subham", "Sudha", "Suhas", "Suman",
    "Sumit", "Sunil", "Suraj", "Surendra", "Swati", "Tanmay", "Tanvi", "Tanya", "Tarun", "Tejas",
    "Uday", "Ujjwal", "Uma", "Upendra", "Usha", "Vaibhav", "Vani", "Varun", "Vedant", "Veena",
    "Vibha", "Vidhi", "Vikas", "Vikram", "Vimal", "Vinay", "Vineet", "Vinit", "Vipin", "Viraj",
    "Vishal", "Vishnu", "Vivek", "Yash", "Yogesh"
];
  
export function generateRandomName() {
    return nameList[Math.floor(Math.random() * nameList.length)];
}
  
export function getRandomMessage(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let message = "";
    for (let i = 0; i < length; i++) {
      message += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return message;
}