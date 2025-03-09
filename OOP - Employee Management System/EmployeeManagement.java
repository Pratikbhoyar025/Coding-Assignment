import java.util.ArrayList;
import java.util.List;

class Employee {
    private int id;
    private String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}

public class EmployeeManagement {
    public static void main(String[] args) {
    	
        Employee emp1 = new Employee(101, "Pratik", 40000);
        Employee emp2 = new Employee(102, "Manish", 55000);
        Employee emp3 = new Employee(103, "Rajiv", 12000);

        List<Employee> employees = new ArrayList<>();			
        employees.add(emp1);
        employees.add(emp2);
        employees.add(emp3);
        
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}

