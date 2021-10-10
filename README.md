# Group2H Society
 CS319 Term Project
 
**Team Members:**
-  Muhammed İkbal Doğan
-  Ahmed Salih Cezayir
-  İsmail Sergen Göçmen
-  Ezgi Lena Sönmez
-  Egemen Öztürk


Pandemic manager application is made for people who study or work in Bilkent University. Its mission is regulate Bilkent University life during the Covid-19 pandemic. There are 5 different user types: Students, Health center workers, Diagnovir Center workers, Instructors, and Cafeteria Employees.
In this app, all of 5 users have different user interfaces according to their user type. Therefore, each user's permission is regulated to their authority after their registration.

**For students,** in the profile section their vaccination status, pcr and diagnovir test results are checked and entered via HES code. In the case if a student is ill or risky, those informations are stored in Covid-19 history section. Therefore, it can be seen that whether student is allowed or not. In addition, every student has his/her own QR code which will be used during the lecture session. When lecture starts, firstly instructor will share a lecture QR code on the screen. After that, all of the students will scan that QR code if a student is not allowed, his/her phone screen become red. If allowed, screen becomes green. Then all the students will show his/her screen to instructor and instructor will detect the people who are not allowed in campus. Thus, student's campus allowance problem would be solved. After the lesson QR code process, each student will scan  QR code of the students next to him/her and show the phone screen to instructor again. If a student is ill and staying in isolated dormitory, he/she can send an information to cafetaria employee about he/she wants food or not.

**For Health Center workers and Diagnovir Center workers,** Diagnovir Test Center processes students’ tests to the database and the app notifies doctor from Bilkent Health Center and related student about the status of the test. If the results comes positive, related student will be prompted to take a PCR test immediately. If student does not take the PCR test or the required PCR test appear to be positive, the student will be quarantined. 
Doctors from Bilkent Health Center will be able to get contact with the tested positive students and can access the necessary information about related student to prescribe the medicines. The student will be monitorized by the doctors and check the quarantine status. 

**For instructors,** before each lecture they will be notified about the students who are not allowed in the class. In addition, to check whether there such students in the class, instructors will share a code and will ask students to scan/enter it. Students will scan/enter this code and show their screen to the instructor. If they are not allowed in the class, their phone screen will turn red and inform the instructor. 

**For cafeteria employees,** they can see the amount of students who are in quarantine dormitories. In this way, they easily send as many meals as the number of students who order from the cafeteria. 

**In short, this application aims to reduce the process of these type of controls that are currently being done by university.**

**Features:**
-  Checking the status (not/allowed for the class) of the students with the code that instuctor reflect on the board or announce to class before the lesson starts.
-  Managing HES Codes
-  Make an appointment from Diagnovir Center
-  Sending a notification to the student's phone by scanning the QR code from the application.
-  Checking the closeby seated classmates before the lesson starts.
-  Showing the total number of students in quarantine dormitories to cafeteria employees to make them prepare and send the enough amount meals.

**Users:**
-  Students
-  Health Center Workers (Doctors)
-  Diognavir Center
-  Instructors
-  Cafeteria Employees
