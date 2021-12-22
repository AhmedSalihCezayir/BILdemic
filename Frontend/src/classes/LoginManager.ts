class LoginManager {

    //Properties
    private static instance: LoginManager | null = null;
    /**public mAuth:FirebaseAuth;
    //public CRUDManager crudManager;

    //Constructor
    private LoginManager() {
        this.mAuth = FirebaseAuth.getInstance();
    }

    //Methods
    public static LoginManager getInstance(){
        if(instance == null) {
            instance = new LoginManager();
        }
        return instance;
    }

    public static boolean createUser(String name, String mail, String password, String role, String address, String phoneNumber, String hesCode, int ID, boolean resideInDorm, String roomMateNames) throws InterruptedException, ExecutionException {
        if (role.equals("Student")) {
            Student student = new Student(name, mail, password, role, address, phoneNumber, hesCode, ID, resideInDorm, roomMateNames);
            CRUDManager.getInstance().createCRUD(student);
            return true;
        }
        else if (role.equals("Instructor")) {
            Instructor instructor = new Instructor(name, mail, password, role, address, phoneNumber, hesCode, ID, false, null);
            CRUDManager.getInstance().createCRUD(instructor);
            return true;
        }
        else if (role.equals("CafeteriaStaff")) {
            CafeteriaStaff cafeteriaStaff = new CafeteriaStaff(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(cafeteriaStaff);
            return true;
        }
        else if (role.equals("HealthCenterStaff")) {
            HealthCenterStaff healthCenterStaff = new HealthCenterStaff(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(healthCenterStaff);
            return true;
        }
        else if (role.equals("DiagnovirTester")) {
            DiagnovirTester diagnovirTester = new DiagnovirTester(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(diagnovirTester);
            return true;
        }
        else if (role.equals("SportStaff")) {
            SportStaff sportStaff = new SportStaff(name, mail, password, role, address, phoneNumber, hesCode);
            CRUDManager.getInstance().createCRUD(sportStaff);
            return true;
        }
        else{
            return false;
        }
    }

    public static void sendCustomEmail(String email, String link) {}*/

}
