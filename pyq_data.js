// Auto-generated PYQ question banks from official NPTEL assignment sets
window.PYQ_BANKS = {
 "pyq_2024_2025": {
  "id": "pyq_2024_2025",
  "title": "PYQ 2024 – 2025 (NOC 25-CS57)",
  "subtitle": "120 MCQs from January 2024 to 2025 Session",
  "badge": "2024 – 2025",
  "count": 120,
  "questions": [
   {
    "id": 1,
    "a": 1,
    "q": "Which of the following is true?",
    "o": [
     "Java uses only interpreter.",
     "Java uses only compiler.",
     "Java uses both interpreter and compiler.",
     "None of the above."
    ],
    "c": 2
   },
   {
    "id": 2,
    "a": 1,
    "q": "A Java file with extension ‘.class’ contains",
    "o": [
     "Java source code",
     "HTML tags",
     "Java Byte code",
     "A program file written in Java programming language"
    ],
    "c": 2
   },
   {
    "id": 3,
    "a": 1,
    "q": "Which of the following is not  an object -oriented programming paradigm?",
    "o": [
     "Encapsulation",
     "Inheritance",
     "Polymorphism",
     "Dynamic memory allocation"
    ],
    "c": 3
   },
   {
    "id": 4,
    "a": 1,
    "q": "Java is a platform independ ent programming language because",
    "o": [
     "It compiles an intermediate code targeting a virtual machine, which can be interpreted by an \ninterpreter for a given OS.",
     "The Java compiler translates the source code directly into the machine -level  language.",
     "It follows the concept of “write once and compile everywhere”.",
     "It is written almost similar to the English language."
    ],
    "c": 0
   },
   {
    "id": 5,
    "a": 1,
    "q": "Which of the following is not a Language Processor?",
    "o": [
     "Assembler",
     "Compiler",
     "Interpreter",
     "Fortran"
    ],
    "c": 3
   },
   {
    "id": 6,
    "a": 1,
    "q": "A platform is the hardware or software environment in which a program runs. Which of the following \nis/are Java platform component(s)?",
    "o": [
     "HTML",
     "Java Virtual Machine",
     "Javascript",
     "HotJava"
    ],
    "c": 1
   },
   {
    "id": 7,
    "a": 1,
    "q": "What is the correct sequence of steps to execute a Java program?  \nI. Compile the Program: Use the javac command to compile the code into bytecode.  \nII. Edit the Pr ogram: Write the code in a text editor or IDE.  \nIII. Run the Program: Use the java command to execute the bytecode.  \nWhich of the following options represents this sequence?",
    "o": [
     "Run → Edit → Compile",
     "Edit → Run → Compile",
     "Compile → Edit → Run",
     "Edit → Compile → Run"
    ],
    "c": 3
   },
   {
    "id": 8,
    "a": 1,
    "q": "What is the primary difference between javac and java commands?",
    "o": [
     "javac  is used to edit Java code, while java runs Java programs.",
     "javac compiles Java source code to bytecode, while java executes the bytecode on the JVM.",
     "javac executes Java programs, while java is used for compilation.",
     "Both are used for compiling Java programs ."
    ],
    "c": 1
   },
   {
    "id": 9,
    "a": 1,
    "q": "Which  of the following is not a feature of Java?",
    "o": [
     "Platform Independence",
     "Object -Oriented Programming",
     "Supports Explicit Pointers",
     "Supports Polymorphism"
    ],
    "c": 2
   },
   {
    "id": 10,
    "a": 1,
    "q": "What is the output of the following code?  \nclass",
    "o": [
     "Hello, World!",
     "HelloWorld!",
     "Compilation Error",
     "Runtime Error"
    ],
    "c": 0
   },
   {
    "id": 11,
    "a": 2,
    "q": "Consider the following object declaration statement\nScanner in = new Scanner(System.in);\nWhat  does  System.in  stands for in the above declaration?",
    "o": [
     "Any file storing data",
     "Refers to the standard input stream , which is typically the keyboard by default.",
     "Reference to scanner as an input device",
     "It is a mouse as an input device"
    ],
    "c": 1
   },
   {
    "id": 12,
    "a": 2,
    "q": "What will be the output of the following Java program?\npublic class VarPrint {\nint x = 30;\nstatic int y = 20;\npublic static void main(String[] args) {\nVarPrint  t1 = new VarPrint ();\nt1.x = 88;\nt1.y = 99;\nint z1 = t1.x + t1.y;\nVarPrint  t2 = new VarPrint ();\nSystem.out.println(t2.x + \" \" + t2.y + \" \" + z1);\n}\n}",
    "o": [
     "30 99 178",
     "30 88 129",
     "30 99 187",
     "88 99 178"
    ],
    "c": 2
   },
   {
    "id": 13,
    "a": 2,
    "q": "What will be the output of the following Java program?\npublic class ArgumenTest {\npublic static void main(String[] args) {\nTest t = new Test();\nt.start();\n}\nstatic class Test {\nvoid start() {\nint a = 4;\nint b = 5;\nSystem.out.print(\"\" + 8 + 3 + \"\");\nSystem.out.print(a + b);\nSystem.out.print(\" \" + a + b + \"\");\nSystem.out.print(foo() + a + b + \" \");\nSystem.out.println(a + b + foo());\n}\nString foo() {\nreturn \"foo\";\n}\n}\n}",
    "o": [
     "9 7 7 foo34 34foo",
     "839 45foo45 9foo",
     "72 34 34 foo34 34foo",
     "9 7 7 foo 7 7foo"
    ],
    "c": 1
   },
   {
    "id": 14,
    "a": 2,
    "q": "What is encapsulati on in object -oriented programming?",
    "o": [
     "Hiding implementation details and exposing only functionality",
     "The process of creating multiple objects in a program",
     "Writing multiple methods in a single class",
     "Using the this keyword to reference an object"
    ],
    "c": 0
   },
   {
    "id": 15,
    "a": 2,
    "q": "Which of the following is true about constructors in a class?",
    "o": [
     "Constructors must have a return type.",
     "Constructors are used to initialize objects.",
     "A class can have only one constructor.",
     "Constructors cannot be overloaded."
    ],
    "c": 1
   },
   {
    "id": 16,
    "a": 2,
    "q": "What does the this  keyword in Java help to achieve?",
    "o": [
     "Avoiding name space collision between instance variables and method parameters",
     "Overloa ding methods in a class",
     "Accessing private methods in another class",
     "Creating multiple objects in a program"
    ],
    "c": 0
   },
   {
    "id": 17,
    "a": 2,
    "q": "What is the correct signature of the main  method in Java?",
    "o": [
     "public void main(String args[])",
     "public static void main(String args[])",
     "void main(String[] args)",
     "public static void  main(String[] args)"
    ],
    "c": 2
   },
   {
    "id": 18,
    "a": 2,
    "q": "Which of the following is used to take runtime input in Java?",
    "o": [
     "BufferedReader",
     "Scanner",
     "DataInputStream",
     "All of the above"
    ],
    "c": 3
   },
   {
    "id": 19,
    "a": 2,
    "q": "Which method is used to format output in Java?",
    "o": [
     "print()",
     "println()",
     "printf()",
     "format()"
    ],
    "c": 2
   },
   {
    "id": 20,
    "a": 2,
    "q": "Which Java class is primarily used to read input from the console?",
    "o": [
     "Scanner",
     "BufferedReader",
     "Console",
     "DataInputStream"
    ],
    "c": 0
   },
   {
    "id": 21,
    "a": 3,
    "q": "Which of the following is true about the super  keyword in Java?",
    "o": [
     "super  can be used to call a parent class constructor.",
     "super  is used to access private variables of the parent class.",
     "super  is used to call a static method in the parent class.",
     "super  can only be used inside a static metho"
    ],
    "c": 0
   },
   {
    "id": 22,
    "a": 3,
    "q": "What is the output of the following Java program?  \nclass StaticScopeDemo { \n  static int x = 5; \n   \n  public static void main(String[] args) {  \n      int x = 10; \n      { \n          int x = 15; // Compilation Error  \n          System.out.println(x); \n      } \n  } \n}",
    "o": [
     "15",
     "Compilation Error",
     "5",
     "10"
    ],
    "c": 1
   },
   {
    "id": 23,
    "a": 3,
    "q": "What will be the output of the following program?  \nclass Parent { \n  void display() { \n    System.out.println(\"Parent display\" ); \n  } \n} \n \nclass Child extends Parent { \n  void display() { \n    System.out.println(\"Child display\" ); \n  } \n} \n \npublic class Main { \n  public static void main(String[] args) {  \n    Parent obj = new Child(); \n    obj.display(); \n  } \n}",
    "o": [
     "Parent display",
     "Child display",
     "Compilation Error",
     "Runtime Error"
    ],
    "c": 1
   },
   {
    "id": 24,
    "a": 3,
    "q": "Which of the following statements about abstract classes in Java is correct?",
    "o": [
     "Abstract classes can be instantiated directly.",
     "An abstract class must contain at least one abstract metho",
     "A class inheriting from an abstract class must implement all its abstract methods unless it is \nitself abstract.",
     "Abstract classes can be marked as  final ."
    ],
    "c": 2
   },
   {
    "id": 25,
    "a": 3,
    "q": "What wil l be the output of the following Java program?  \npublic class",
    "o": [
     "5",
     "24",
     "120",
     "Runtime Error"
    ],
    "c": 2
   },
   {
    "id": 26,
    "a": 3,
    "q": "Which of the following is  NOT  true regarding the  final  keyword in Java?",
    "o": [
     "A final method cannot be overridden in a subclass.",
     "A final variable can only be assigned once.",
     "A final class can have subclasses.",
     "A final variable can be assigned during declaration or in the constructor."
    ],
    "c": 2
   },
   {
    "id": 27,
    "a": 3,
    "q": "What is the output of the following Java program?  \nclass Test { \n    static int count = 0; \n     \n    public Test() { \n        count++;  \n    } \n     \n    public static void main(String[] args) {  \n        Test obj1 = new Test(); \n        Test obj2 = new Test(); \n        Test obj3 = new Test(); \n        System.out.println(\"Count: \"  + Test.count); \n    } \n}",
    "o": [
     "Count: 0",
     "Compilation Error",
     "Runtime Error",
     "Count: 3"
    ],
    "c": 3
   },
   {
    "id": 28,
    "a": 3,
    "q": "Which of these is NOT  an example of method overriding in Java?",
    "o": [
     "A subclass defining a method with the same name but different parameters than a superclass \nmetho",
     "A subclass providing a new implementation for a method in the superclass.",
     "A subclass defining a method with the same name and parameters as a superclass metho",
     "Using the super keyword to call the superclass version of an overridden metho"
    ],
    "c": 0
   },
   {
    "id": 29,
    "a": 3,
    "q": "What is the output of the following Java program?  \nclass Parent { \n    String message() { \n        return \"Parent\" ; \n    } \n} \n \nclass Child extends Parent { \n    String message() { \n        return \"Child\"; \n    } \n} \n \npublic class Main { \n    public static void main(String[] args) {  \n        Child p = new Parent(); \n        System.out.println(p.message()); \n    } \n}",
    "o": [
     "Parent",
     "Child",
     "Compilation Error",
     "No error and nothing is printed"
    ],
    "c": 2
   },
   {
    "id": 30,
    "a": 3,
    "q": "What is the output of the following program?  \npublic class",
    "o": [
     "5",
     "10",
     "15",
     "Runtime Error"
    ],
    "c": 2
   },
   {
    "id": 31,
    "a": 4,
    "q": "Which access modifier allows a method to be accessible within the same package but not from \noutside the package?",
    "o": [
     "default",
     "private",
     "public",
     "protected"
    ],
    "c": 0
   },
   {
    "id": 32,
    "a": 4,
    "q": "What will happen if you attempt to access a private method from another class in Java?",
    "o": [
     "The method will be accessible.",
     "The method will throw an exception.",
     "The method will be inaccessible.",
     "The method will be converted to protecte"
    ],
    "c": 2
   },
   {
    "id": 33,
    "a": 4,
    "q": "What will be the output of the following code?  \nclass Person {  \n    int a = 1;  \n    int b = 0;  \n    public Person() {  \n        System.out.println(a + b + \" Java \"  );  \n    }  \n}  \n \nclass Employee extends Person {  \n    int a = 0;  \n    int b = 1;  \n    public Employee () {  \n        System.out.println(a * b + \" Java \"  );  \n    }  \n}  \n \npublic class Question {  \n    public static void main(String args[]) {  \n        Person p = new Employee ();  \n    }  \n}",
    "o": [
     "1 Java 10  \n0 Java 0",
     "1 Java  \n0 Java",
     "10 Java  \n0 Java",
     "1 java 1  \n0 Java 0"
    ],
    "c": 1
   },
   {
    "id": 34,
    "a": 4,
    "q": "Which of the following is a built -in Java package?",
    "o": [
     "java.util",
     "my.pac kage.util",
     "default.package",
     "system.java"
    ],
    "c": 0
   },
   {
    "id": 35,
    "a": 4,
    "q": "What keyword is used to define a package in Java?",
    "o": [
     "define",
     "package",
     "import",
     "namespace"
    ],
    "c": 1
   },
   {
    "id": 36,
    "a": 4,
    "q": "How do you import a specific class from a package in Java?",
    "o": [
     "import package.* ;",
     "import package .ClassName;",
     "include package.ClassName;",
     "use package.ClassName;"
    ],
    "c": 1
   },
   {
    "id": 37,
    "a": 4,
    "q": "Consider the following program:  \nclass Base {  \n    public void print() {  \n        System.out.println(\"Base class...\" ); \n    }  \n}  \nclass Derived extends Base {  \n    public void print() {  \n        System.out.println(\"Derived class...\" ); \n    }  \n}  \npublic class Main {      \n    private static void main (String[] args) {  \n        Base b = new Base();  \n        b.print();  \n        Derived d = new Derived();  \n        d.print();  \n    }  \n} \nHow many errors does this program contain?",
    "o": [
     "None",
     "print();  \n        Derived d = new Derived();  \n        d.print();  \n    }  \n} \nHow many errors does this program contain?",
     "2",
     "3"
    ],
    "c": 1
   },
   {
    "id": 38,
    "a": 4,
    "q": "Which of the following is true about Java interfaces?",
    "o": [
     "They cannot contain method implementations.",
     "An interface can extend multiple classes.",
     "An interface can only contain abstract methods.",
     "They allow a class to achieve multiple inheritance."
    ],
    "c": 3
   },
   {
    "id": 39,
    "a": 4,
    "q": "What will happen if you do not specify an access modifier for a class in a package?",
    "o": [
     "The class will be `private` by default.",
     "The class will be `protected` by default.",
     "The class will be accessible only within the same package.",
     "The class will be `publ ic` by default."
    ],
    "c": 2
   },
   {
    "id": 40,
    "a": 4,
    "q": "Which access modifier provides the most restrictive access in Java?",
    "o": [
     "default",
     "protected",
     "private",
     "public"
    ],
    "c": 2
   },
   {
    "id": 41,
    "a": 5,
    "q": "Which of the following statement(s) is/are true about  finally  in Java?  \nI. The finally  block is executed regardless of whether an exception is thrown or not.  \nII. A finally  block can exist without a  catch  block.  \nIII. The finally  block will not execute if  System.exit()  is called in the  try  block.  \nIV. A finally  block can have a return  statement , but it is not recommended to use.",
    "o": [
     "I and II",
     "II and III",
     "I, II and III",
     "I, II, III and IV"
    ],
    "c": 3
   },
   {
    "id": 42,
    "a": 5,
    "q": "What will be the output of the following Java program?  \ninterface  A { \n    int x = 10; \n    void display(); \n} \nclass B implements  A { \n    public void display() { \n        System.out.println(\"Value of x: \"  + x); \n    } \n} \npublic class Main { \n    public static void main(String[] args) {  \n        B obj = new B(); \n        obj.display(); \n    } \n}",
    "o": [
     "Value of x: 10",
     "Value of x: 0",
     "Compilation Error",
     "Runtime Error"
    ],
    "c": 0
   },
   {
    "id": 43,
    "a": 5,
    "q": "What will be the output of the following program?  \nclass",
    "o": [
     "5 Complete",
     "Error Complete",
     "Runtime Error",
     "Compilation Error"
    ],
    "c": 1
   },
   {
    "id": 44,
    "a": 5,
    "q": "Which of the following is TRUE regarding abstract class and an interface in Java?  \nI. Abstract classes can contain constructors, but interfaces cannot.  \nII. Interfaces support multiple inheritance, but abstract classes do not. \nIII. Abstract classes can have both abstract and concrete methods, whereas interfaces only had \nabstract methods before Java 8.",
    "o": [
     "I, II and III",
     "II only",
     "I and II only",
     "II and III only"
    ],
    "c": 0
   },
   {
    "id": 45,
    "a": 5,
    "q": "Which of the following is a  checked exception  in Java?",
    "o": [
     "NullPointerException",
     "ArrayIndexOutOfBounds Exception",
     "IOException",
     "ArithmeticException"
    ],
    "c": 2
   },
   {
    "id": 46,
    "a": 5,
    "q": "Which keyword is NOT used by Java during exception handling?",
    "o": [
     "try",
     "catch",
     "final",
     "finally"
    ],
    "c": 2
   },
   {
    "id": 47,
    "a": 5,
    "q": "What is the purpose of the  throws  keyword in Java?",
    "o": [
     "To declare exceptions that a method can throw",
     "To throw an exception immediately",
     "To catch an exception",
     "It is not a keyword in Java"
    ],
    "c": 0
   },
   {
    "id": 48,
    "a": 5,
    "q": "Which of the following is T RUE about interfaces in Java?",
    "o": [
     "Interfaces should always be defined as final",
     "Interfaces can be instantiated directly.",
     "Interfaces can extend multiple interfaces.",
     "Interfaces cannot have any methods  signatures"
    ],
    "c": 2
   },
   {
    "id": 49,
    "a": 5,
    "q": "What will be the output of the following code?  \ninterface  Demo { \n    void display(); \n} \n \nclass Test implements  Demo { \n    public void display() { \n        System.out.println(\"Hello,",
    "o": [
     "Hello,",
     "Compilation Error",
     "Runtime Error",
     "No Output"
    ],
    "c": 0
   },
   {
    "id": 50,
    "a": 5,
    "q": "What will be the output of the following Java pr ogram?  \ninterface  Calculator { \n    void calculate (int value); \n} \n \nclass Square implements  Calculator { \n    int result; \n    public void calculate (int value) {  \n        result = value * value;  \n        System.out.print(\"Square: \"  + result + \" \"); \n    } \n} \n \nclass Cube extends Square { \n    public void calculate (int value) {  \n        result = value * value * value;  \n        super.calculate (value);  \n        System.out.print(\"Cube: \"  + result + \" \"); \n    } \n} \n \npublic class Main { \n    public static void main(String[] args)  { \n        Calculator  obj = new Cube(); \n        obj.calculate (3); \n    } \n}",
    "o": [
     "Square: 9 Cube: 9",
     "Cube: 27 Square: 9",
     "Square: 9 Square: 27 Cube: 27",
     "Square: 9 Cube: 27 Square: 27"
    ],
    "c": 0
   },
   {
    "id": 51,
    "a": 6,
    "q": "Consider the following code snippet . \nclass MyThread extends Thread {   \n    public void run() {   \n        for (int i = 0; i < 3; i++) {   \n            System.out.println(\"Running thread: \"  + i);   \n        }   \n    }   \n}  \n   \npublic class Main {   \n    public static void main(String[] args) {   \n        MyThread  thread = new MyThread ();   \n        thread.run();   \n        System.out.println(\"Main method complete.\" );   \n    }   \n} \nWhat will be the output of the program?",
    "o": [
     "Running thread: 0  \nRunning thread: 1  \nRunning thread: 2  \nMain method complete.",
     "Running thread: 0  \nMain method complete.  \nRunning thread: 1  \nRunning thread: 2",
     "Main method complete.",
     "run();   \n        System.out.println(\"Main method complete.\" );   \n    }   \n} \nWhat will be the output of the program?"
    ],
    "c": 0
   },
   {
    "id": 52,
    "a": 6,
    "q": "Which of the  following best describes the concept of multithreading in Java?",
    "o": [
     "Multiple threads execute concurrently, sharing the same memory space.",
     "Only one thread executes at a time, ensuring sequential execution.",
     "Threads in Java cannot communicate with each other.",
     "Threads require separate memory allocation for each thread to run."
    ],
    "c": 0
   },
   {
    "id": 53,
    "a": 6,
    "q": "What will happen when the following code is executed?  \nclass ExampleThread extends Thread {   \n    public void run() {   \n        System.out.println(\"Thread is running.\" );   \n    }   \n}   \n   \npublic class Main {   \n    public static void main(String[] args) {   \n        ExampleThread  thread = new ExampleThread ();   \n        thread.start();   \n        thread.start();   \n    }   \n}",
    "o": [
     "The program will execute successfully, printing \"Thread is running.\" twice.",
     "The program will th row an error when attempting to start the thread a second time.",
     "The program will terminate without any output.",
     "start();   \n        thread.start();   \n    }   \n}"
    ],
    "c": 1
   },
   {
    "id": 54,
    "a": 6,
    "q": "Find the error in the following program:  \nclass RunnableExample implements  Runnable {   \n    public void run() {   \n        for (int i = 1; i <= 3; i++) {   \n            System.out.println(\"Runnable thread: \"  + i);   \n        }   \n    }   \n}   \n   \npublic class Main {   \n    public static void main(String[] args) {   \n        RunnableExample  runnable = new RunnableExample ();   \n        runnable .run();   \n        System.out.println(\"Main method ends.\" );   \n    }   \n}",
    "o": [
     "The program will throw an error because Runnable cannot be executed directly.",
     "The program will run successfully but will not create a new threa",
     "The program will create a new thread and execute concurrently.",
     "The program will throw a runtime error because Thread is not use"
    ],
    "c": 1
   },
   {
    "id": 55,
    "a": 6,
    "q": "What will happen when the following code is executed?  \n class RunnableExample implements  Runnable {   \n    public void run() {   \n        for (int i = 1; i <= 3; i++) {   \n            System.out.println(\"Thread running: \"  + i);   \n        }   \n    }   \n}   \n \npublic class Main {   \n    public static void main(String[] args) {   \n        RunnableExample  task = new RunnableExample ();   \n        Thread thread = new Thread(task);   \n        thread.start();   \n    }   \n}",
    "o": [
     "The program will throw a compile -time error because Runnable  is not a threa",
     "The program will execute successfully, and the run()  method will run in a new threa",
     "The program will execute the run()  method directly on the main threa",
     "start();   \n    }   \n}"
    ],
    "c": 1
   },
   {
    "id": 56,
    "a": 6,
    "q": "Which of the following states can a thread enter during its lifecycle in Java?",
    "o": [
     "New, Runnable, Running, Blocked",
     "New, Runnable, Waiting, Blocked, Terminated",
     "New, Runnable, Running, Sleeping, Dead",
     "New, Ac tive, Waiting, Suspended, Terminated"
    ],
    "c": 1
   },
   {
    "id": 57,
    "a": 6,
    "q": "What does the thread scheduler use to decide which thread to run when multiple threads are in the \nrunnable state?",
    "o": [
     "Thread priority",
     "Thread's execution time",
     "Thread name",
     "Thread creation order"
    ],
    "c": 0
   },
   {
    "id": 58,
    "a": 6,
    "q": "Consider the following program:  \nclass PriorityExample extends Thread {   \n    public void run() {   \n        System.out.println(Thread.currentThread ().getName() +   \n                           \" with priority \"  + \nThread.currentThread ().getPriority ());   \n    }   \n}   \n \npublic class Main {   \n    public static void main(String[] args) {   \n        PriorityExample  t1 = new PriorityExample ();   \n        PriorityExample  t2 = new PriorityExample ();   \n \n        t1.setPriority (Thread.MIN_PRIORITY );   \n        t2.setPriority (Thread.MAX_PRIORITY );   \n \n        t1.start();   \n        t2.start();   \n    }   \n}   \nWhich of the following is true about the output?",
    "o": [
     "The thread with the higher priority is guaranteed to execute first.",
     "The thread with the lower priority will never execute.",
     "The order of execution depends on the JVM and OS scheduling policies.",
     "currentThread ().getName() +   \n                           \" with priority \"  + \nThread.currentThread ().getPriority ());   \n    }   \n}   \n \npublic class Main {   \n    public static void main(String[] args) {   \n        PriorityExample  t1 = new PriorityExample ();   \n        PriorityExample  t2 = new PriorityExample ();   \n \n        t1.setPriority (Thread.MIN_PRIORITY );   \n        t2.setPriority (Thread.MAX_PRIORITY );   \n \n        t1.start();   \n        t2.start();   \n    }   \n}   \nWhich of the following is true about the output?"
    ],
    "c": 2
   },
   {
    "id": 59,
    "a": 6,
    "q": "What is the primary purpose of thread synchronization in Java?",
    "o": [
     "To allow multiple threads to execute a method at the same time",
     "To ensure thread execution follows a specific order",
     "To prevent race conditions and ensure data consistency",
     "To allow threads to communicate with each other"
    ],
    "c": 2
   },
   {
    "id": 60,
    "a": 6,
    "q": "What is the primary difference between Byte Str eams and Character Streams in Java?",
    "o": [
     "Byte Streams handle characters, while Character Streams handle bytes.",
     "Byte Streams are used for binary data, while Character Streams are used for text dat",
     "Character Streams are faster than Byte Streams in all cases.",
     "Character Streams cannot handle international characters like Unicode."
    ],
    "c": 1
   },
   {
    "id": 61,
    "a": 7,
    "q": "What will be the output of the following Java program?  \nimport jav",
    "o": [
     "io. *; \nclass ReadFile { \n    public static void main(String[] args) throws IOException  { \n        FileReader  fr = new FileReader (\"",
     "This is Programming in Java online course.",
     "IOException",
     "null"
    ],
    "c": 1
   },
   {
    "id": 62,
    "a": 7,
    "q": "Which of these classes is used to write primitive data types to an output stream in Java?",
    "o": [
     "FileWriter",
     "DataOutputStream",
     "PrintWriter",
     "BufferedOutputStream"
    ],
    "c": 1
   },
   {
    "id": 63,
    "a": 7,
    "q": "What will the following code print?  \nimport jav",
    "o": [
     "io. *; \n \nclass RandomAccessFileExample { \n    public static void main(String[] args) throws IOException  { \n     RandomAccessFile  file = new RandomAccessFile (\"test.dat\" , \"rw\"); \n     file.writeInt (100); \n     file.seek(0); \n     System.out.println(file.readInt()); \n     file.close(); \n    } \n}",
     "Runtime Error",
     "Compilation Erro",
     "100"
    ],
    "c": 3
   },
   {
    "id": 64,
    "a": 7,
    "q": "Complete the following snippet  with the required code.  \nFile file = new File(\"file.txt\" ); \nif (__________________) // Fill in the blank s \n{ \n    System.out.println(\"File exists.\" ); \n} else  \n{ \n    System.out.println(\"File does not exist.\" ); \n}",
    "o": [
     "file.exists()",
     "file.isFile()",
     "file.fileExists()",
     "file.isAvailable()"
    ],
    "c": 0
   },
   {
    "id": 65,
    "a": 7,
    "q": "What will the following Java program output?  \nimport jav",
    "o": [
     "io. *; \n \nclass SequenceInputStreamExample { \n    public static void main(String[] args) throws IOException  { \n       ByteArrayInputStream  input1 = new \nByteArrayInputStream (\"123\".getBytes ()); \n        ByteArrayInputStream  input2 = new \nByteArrayInputStream (\"ABC\".getBytes ()); \n        SequenceInputStream  sequence = new \nSequenceInputStream (input1, input2);  \n \n        int i; \n        while ((i = sequence .read()) != -1) { \n            System.out.print((char) i); \n        } \n    } \n}",
     "ABC123",
     "Compilation Error",
     "Runtime Error"
    ],
    "c": 0
   },
   {
    "id": 66,
    "a": 7,
    "q": "What is the output of  the following Java program?  \nclass Main { \n \n  public static void main(String args[]) {  \n    final int i; \n    i = 20; \n    i = 30; \n    System.out.println(i); \n  } \n}",
    "o": [
     "30",
     "Compiler Error",
     "Garbage value",
     "0"
    ],
    "c": 1
   },
   {
    "id": 67,
    "a": 7,
    "q": "What will be the output of the following Java program?  \nimport jav",
    "o": [
     "io. *; \nclass Chararrayinput { \n  public static void main(String[] args) {  \n    String obj = \"abcdefgh\" ; \n    int length = obj.length(); \n    char c[] = new char[length];  \n    obj.getChars (0, length, c, 0); \n    CharArrayReader  input1 = new CharArrayReader (c); \n    CharArrayReader  input2 = new CharArrayReader (c, 1, 4); \n    int i, j; \n    try { \n      while ((i = input1.read()) == (j = input2.read())) { \n        System.out.print((char) i); \n      } \n    } catch (IOException  e) { \n      e.printStackTrace (); \n    } \n  } \n}",
     "abcd",
     "abcde",
     "none of the mentioned"
    ],
    "c": 3
   },
   {
    "id": 68,
    "a": 7,
    "q": "What will be the output of the following Java program?  \npublic class Calculator { \n    int num = 100; \n \n    public void calc(int num) { \n        this.num = num * 10; \n    } \n \n    public void printNum () { \n        System.out.println(num); \n    } \n \n    public static void main(String[] args) {  \n        Calculator  obj = new Calculator (); \n        obj.calc(2); \n        obj.printNum (); \n    } \n}",
    "o": [
     "20",
     "100",
     "1000",
     "2"
    ],
    "c": 0
   },
   {
    "id": 69,
    "a": 7,
    "q": "What will be the output of the following code?  \nimport jav",
    "o": [
     "io. *; \n \npublic class W7 { \n    public static void main(String[] args) {  \n        try { \n \n            PrintWriter  writer = new PrintWriter (System.out); \n \n            writer.write(9 + 97); \n \n            writer.close(); \n        } catch (Exception  e) { \n            System.out.println(e); \n        } \n    } \n}",
     "It will give run -time error",
     "j",
     "106"
    ],
    "c": 2
   },
   {
    "id": 70,
    "a": 7,
    "q": "What will be the output of the following code.  \nfile.txt contain \"This is",
    "o": [
     "io.File ; \n \nclass FileSizeEample { \n    public static void main(String[] args) {  \n        // Specify the file path  \n        String filePath = \"file.txt\" ; \n \n        // Create a File object  \n        File file = new File(filePath);  \n \n        // Get the size of the file  \n        long fileSize = file.length(); \n \n        // Print the size of the file  \n        System.out.println(fileSize);  \n    } \n}",
     "35",
     "7",
     "0"
    ],
    "c": 0
   },
   {
    "id": 71,
    "a": 8,
    "q": "Which of the following is TRUE regarding check box and radio button?",
    "o": [
     "Check box is used for single selection item whereas radio button is used for multiple selection.",
     "Check box is used for multiple  selection item s whereas radio button is used for single  selection.",
     "Both are used for multiple as well as single item selection.",
     "Checkbox is always preferred than radio buttons."
    ],
    "c": 1
   },
   {
    "id": 72,
    "a": 8,
    "q": "Which of the following is the latest graphics and media package for Java?",
    "o": [
     "Applet",
     "AWT",
     "Swing",
     "JavaFX"
    ],
    "c": 3
   },
   {
    "id": 73,
    "a": 8,
    "q": "Which of the following is/are NOT an exception of jav",
    "o": [
     "Option 1",
     "Option 2",
     "Option 3",
     "Option 4"
    ],
    "c": 0
   },
   {
    "id": 74,
    "a": 8,
    "q": "Which of the following statement is FALSE  about the update() in jav",
    "o": [
     "Option 1",
     "Option 2",
     "Option 3",
     "Option 4"
    ],
    "c": 0
   },
   {
    "id": 75,
    "a": 8,
    "q": "Which of the following method is used to remove all items from scrolling list in jav",
    "o": [
     "Option 1",
     "Option 2",
     "Option 3",
     "Option 4"
    ],
    "c": 0
   },
   {
    "id": 76,
    "a": 8,
    "q": "Which layout manager arranges components in a single row or column in Java ?",
    "o": [
     "FlowLayout",
     "BorderLayout",
     "GridLayout",
     "CardLayout"
    ],
    "c": 0
   },
   {
    "id": 77,
    "a": 8,
    "q": "What does \"AWT\" stand for in Java?",
    "o": [
     "Abstract Widget Toolkit",
     "Advanced Window Toolkit",
     "Abstract Window Toolkit",
     "Advanced Widget Toolkit"
    ],
    "c": 2
   },
   {
    "id": 78,
    "a": 8,
    "q": "Which AWT component is used to create a button in a GUI?",
    "o": [
     "Label",
     "Button",
     "TextField",
     "Checkbox"
    ],
    "c": 1
   },
   {
    "id": 79,
    "a": 8,
    "q": "Which of the following is TRUE about the following GUI?",
    "o": [
     "There is a Frame and two TextFields.",
     "There is a Frame with two Labels and two non -editable TextFields.",
     "There are two Labels.",
     "There is a Frame with two Labels and two TextFields."
    ],
    "c": 3
   },
   {
    "id": 80,
    "a": 8,
    "q": "Which of the following is TRUE about check box in Java?",
    "o": [
     "A check box can’t be in either an \"on\" (true) or \"off\" (false) state.",
     "Clicking on a check box changes its state from \"on\" to \"off,\" or from \"off\" to \"on.\"",
     "A check box can be in an \"on\" (true) and in  \"off\" (false) state  simultaneously .",
     "Check boxes cannot be grouped together ."
    ],
    "c": 1
   },
   {
    "id": 81,
    "a": 9,
    "q": "Which Swing component is best suited for displaying a drop -down list of selectable options?",
    "o": [
     "JButton",
     "JComboBox",
     "JTextField",
     "JPanel"
    ],
    "c": 1
   },
   {
    "id": 82,
    "a": 9,
    "q": "What will be the output of the following Java code?  \nimport javax.swing. *; \nimport jav",
    "o": [
     "awt. *; \n \npublic class SwingExample { \n    public static void main(String[] args) {  \n        JFrame frame = new JFrame(\"Example\" ); \n        frame.setLayout (new FlowLayout ()); \n        frame.add(new JButton(\"Button 1\" )); \n        frame.add(new JButton(\"Button 2\" )); \n        frame.setSize(300, 200); \n        frame.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE ); \n        frame.setVisible (true); \n    } \n}",
     "A frame with only one button labeled “Button 2”.",
     "Compilation Error.",
     "Runtime Error."
    ],
    "c": 0
   },
   {
    "id": 83,
    "a": 9,
    "q": "Which of the following is  true  about the  JLabel  component in Java Swing?",
    "o": [
     "It is used only for displaying text.",
     "It can display text and icons.",
     "It cannot be added to a  JPanel .",
     "It generates mouse events by default."
    ],
    "c": 1
   },
   {
    "id": 84,
    "a": 9,
    "q": "Which method is used to handle mouse click events in Java Swing?",
    "o": [
     "mouseClicked()",
     "keyPressed()",
     "actionPerformed()",
     "componentShown()"
    ],
    "c": 0
   },
   {
    "id": 85,
    "a": 9,
    "q": "What should replace // INSERT CODE HERE  to create a JFrame  with a JButton  labeled \n\"Click Me\" ? \nimport javax.swing. *; \n \npublic class FrameExample { \n    public static void main(String[] args) {  \n        JFrame frame = new JFrame(\"Demo Frame\" ); \n        JButton button = new JButton(\"Click Me\" ); \n        // INSERT  CODE HERE  \n        frame.setSize(300, 200); \n        frame.setVisible (true); \n    } \n}",
    "o": [
     "frame.add(button);",
     "frame.insert(button);",
     "frame.append(button);",
     "frame.push(button);"
    ],
    "c": 0
   },
   {
    "id": 86,
    "a": 9,
    "q": "Identify and correct the error in the following program:  \nimport javax.swing. *; \nimport jav",
    "o": [
     "awt. *; \n \npublic class PanelExample { \n    public static void main(String[] args) { \n        JFrame frame = new JFrame(\"Panel Example\" ); \n        JPanel panel = new JPanel(); \n        JButton button = new JButton(\"Submit\" ); \n        panel.setFlowLayout (); // ERROR \n        panel.add(button);  \n        frame.add(panel);  \n        frame.setSize(300, 200); \n        frame.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE ); \n        frame.setVisible (true); \n    } \n} \nWhat should the erroneous line ( panel.setFlowLayout(); ) be replaced with?",
     "panel.addFlowLayout();",
     "panel.appen dLayout(new FlowLayout());",
     "panel.setLayout(new FlowLayout());"
    ],
    "c": 3
   },
   {
    "id": 87,
    "a": 9,
    "q": "What will the following Java program output?  \nimport javax.swing. *; \n \npublic class LabelExample { \n    public static void main(String[] args) {  \n        JFrame frame = new JFrame(\"Label Demo\" ); \n        JLabel label = new JLabel(\"Welcome to Swing\" ); \n        frame.setSize(250, 100); \n        frame.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE ); \n        frame.setVisible (true); \n    } \n}",
    "o": [
     "A frame with the label \"Welcome to Swing\".",
     "A frame with no visible label.",
     "Compilation Error.",
     "Runtime Error."
    ],
    "c": 1
   },
   {
    "id": 88,
    "a": 9,
    "q": "What does the following code do?  \nimport javax.swing. *; \n \npublic class",
    "o": [
     "Creates a JFrame with a JButton labeled \"Programming in Java\"",
     "Compiles with errors",
     "Displays a message dialog",
     "Creates a JPanel with a JButton labeled \"Programming in Java\""
    ],
    "c": 0
   },
   {
    "id": 89,
    "a": 9,
    "q": "What happens when the button in this Java code snippet is clicked?  \nimport javax.swing. *; \nimport jav",
    "o": [
     "awt.event. *; \npublic class",
     "A message dialog with the text \"Welcome to the course\" is displayed",
     "The button label changes to \"Welcome to the course\"",
     "Nothing happens"
    ],
    "c": 1
   },
   {
    "id": 90,
    "a": 9,
    "q": "The container displays a number of components in a column, with extra space going between the first \ntwo components.  \n \nWhich of the following layout manager(s) most naturally suited for the described layout?",
    "o": [
     "BoxLayout",
     "FlowLayout",
     "BorderLayout",
     "GridLayout"
    ],
    "c": 0
   },
   {
    "id": 91,
    "a": 10,
    "q": "Which Swing component is used to create a button?",
    "o": [
     "JLabel",
     "JButton",
     "JTextField",
     "JPanel"
    ],
    "c": 1
   },
   {
    "id": 92,
    "a": 10,
    "q": "What does a toggle button in Java do?",
    "o": [
     "It switches between two states, like on/off or enabled/disabled.",
     "It only changes the color of the button when clicked.",
     "It displays text inside the button.",
     "It opens a new window when clicked."
    ],
    "c": 0
   },
   {
    "id": 93,
    "a": 10,
    "q": "What is the primary purpose of SQL(Structured Query Language) in Java applicati on ?",
    "o": [
     "To create and amange user interfaces",
     "To interact with databases for data retrieval and manipulation",
     "To performa systme -level operation like file management",
     "To handle memory allocation in Java programs"
    ],
    "c": 1
   },
   {
    "id": 94,
    "a": 10,
    "q": "Which method is used in Java to check if a network interface is up and running?",
    "o": [
     "isActive()",
     "isUp()",
     "isRunning()",
     "isConnected()"
    ],
    "c": 1
   },
   {
    "id": 95,
    "a": 10,
    "q": "Which of the following are considered as basic networking components in Java?",
    "o": [
     "Socket and ServerSocket",
     "String and Integer",
     "JFrame and Jbutton",
     "Scanner and System"
    ],
    "c": 0
   },
   {
    "id": 96,
    "a": 10,
    "q": "In context of the following URL, identify the  correct option.\nhttps://",
    "o": [
     "There is no protocol provided in the above link.",
     "The website provides a secure connection.",
     "The given link is incomplete and hence cannot open a website.",
     "The a c.in refers to the domain ."
    ],
    "c": 1
   },
   {
    "id": 97,
    "a": 10,
    "q": "Which of the following is/are application layer protocol(s)?",
    "o": [
     "TCP",
     "UDP",
     "ARP",
     "SMTP"
    ],
    "c": 3
   },
   {
    "id": 98,
    "a": 10,
    "q": "What does this Java code snippet do?  \nimport jav",
    "o": [
     "sql. *; \n \npublic class",
     "Inserts data into the \"employees\" table of a MySQL database",
     "Deletes data from the \"employees\" table of a MySQL database",
     "Updates data in the \"employees\" table of a MySQL database"
    ],
    "c": 0
   },
   {
    "id": 99,
    "a": 10,
    "q": "Which class provides  methods to work with URLs?",
    "o": [
     "URLConnection",
     "HttpURL",
     "NetURL",
     "URL"
    ],
    "c": 3
   },
   {
    "id": 100,
    "a": 10,
    "q": "Which class in Java is used to create a server socket?",
    "o": [
     "Socket",
     "ServerSocket",
     "DatagramSocket",
     "HttpURLConnection"
    ],
    "c": 1
   },
   {
    "id": 101,
    "a": 11,
    "q": "What is the full form of JDBC?",
    "o": [
     "Java Database Connectivity",
     "Java Data Code",
     "Java Data Communication",
     "Java Development Connectivity"
    ],
    "c": 0
   },
   {
    "id": 102,
    "a": 11,
    "q": "Fill in the missing code to establish a connection to a MySQL database.  \nimport jav",
    "o": [
     "Option 1",
     "Option 2",
     "Option 3",
     "Option 4"
    ],
    "c": 0
   },
   {
    "id": 103,
    "a": 11,
    "q": "Identify the error in the  following code and select the corrected statement:  \nimport jav",
    "o": [
     "Option 1",
     "Option 2",
     "Option 3",
     "Option 4"
    ],
    "c": 0
   },
   {
    "id": 104,
    "a": 11,
    "q": "What will the following Java program output if the database contains a table products  with a column \nname  and three rows: Laptop , Phone , and Tablet ? \nimport jav",
    "o": [
     "Option 1",
     "Option 2",
     "Option 3",
     "Option 4"
    ],
    "c": 0
   },
   {
    "id": 105,
    "a": 11,
    "q": "Complete the following code to insert a new user into a users  table . \nimport jav",
    "o": [
     "Option 1",
     "Option 2",
     "Option 3",
     "Option 4"
    ],
    "c": 0
   },
   {
    "id": 106,
    "a": 11,
    "q": "Which of  the following SQL operations can be executed using the executeUpdate  method in JDBC?\nI. INSERT INTO users (id, name) VALUES (1, 'Alice');\nII. UPDATE users SET name='Bob' WHERE id=1;\nIII. DELETE FROM users WHERE id=1;\nIV. SELECT * FROM users;",
    "o": [
     "I, II, and III",
     "Only I and II",
     "Only I",
     "I, II, III and IV"
    ],
    "c": 0
   },
   {
    "id": 107,
    "a": 11,
    "q": "What is the purpose of the DriverManager  class in JDBC?",
    "o": [
     "To manage database connections.",
     "To execute SQL queries.",
     "To fetch data from a database.",
     "To represent a database record."
    ],
    "c": 0
   },
   {
    "id": 108,
    "a": 11,
    "q": "How do you establish a connection to a database using JDBC?",
    "o": [
     "By creating an instance of the Connection interface",
     "By using the DriverManager.getConnection() method",
     "By implementing the Connection interface",
     "By extending the Connection class"
    ],
    "c": 1
   },
   {
    "id": 109,
    "a": 11,
    "q": "Which method executes a simple query and returns a single Result Set object?",
    "o": [
     "executeQuery()",
     "executeUpdate()",
     "execute()",
     "run()"
    ],
    "c": 0
   },
   {
    "id": 110,
    "a": 11,
    "q": "Which package in Java contains the classes and interfaces for JDBC?  \n jav",
    "o": [
     "Option 1",
     "Option 2",
     "Option 3",
     "Option 4"
    ],
    "c": 0
   },
   {
    "id": 111,
    "a": 12,
    "q": "What is the correct way to create a thread in Java?",
    "o": [
     "Implementing the Runnable  interface",
     "Extending the Thread  class",
     "Both A and B",
     "None of the above"
    ],
    "c": 2
   },
   {
    "id": 112,
    "a": 12,
    "q": "Which method starts a thread in Java?",
    "o": [
     "start()",
     "run()",
     "execute()",
     "init()"
    ],
    "c": 0
   },
   {
    "id": 113,
    "a": 12,
    "q": "Which layout arranges components in a row -based order?",
    "o": [
     "GridLayout",
     "FlowLayout",
     "BorderLayout",
     "CardLayout"
    ],
    "c": 1
   },
   {
    "id": 114,
    "a": 12,
    "q": "What does the setSize(400, 300);  method do in a JFrame?",
    "o": [
     "Sets the width to 300 and height to 400",
     "Sets the width to 400 and height to 300",
     "Maximizes the Jframe",
     "Closes the Jframe"
    ],
    "c": 1
   },
   {
    "id": 115,
    "a": 12,
    "q": "What does the ResultSet  object contain in JDBC?",
    "o": [
     "Only non -null records from a table",
     "All records from a table, including null values",
     "Only null records",
     "A single column fro m a table"
    ],
    "c": 1
   },
   {
    "id": 116,
    "a": 12,
    "q": "What will be the output of  \nSystem.out.println(\"hello\".length()); ?",
    "o": [
     "3",
     "5",
     "6",
     "4"
    ],
    "c": 1
   },
   {
    "id": 117,
    "a": 12,
    "q": "What is the correct way to declare an array in Java?",
    "o": [
     "int arr = new int(5);",
     "int[] arr = new int[5];",
     "array arr = new int[5];",
     "int arr[] = new int();"
    ],
    "c": 1
   },
   {
    "id": 118,
    "a": 12,
    "q": "What will be printed by the following code?  \nSystem.out.println( \"Java\".charAt( 1));",
    "o": [
     "J",
     "a",
     "v",
     "A"
    ],
    "c": 1
   },
   {
    "id": 119,
    "a": 12,
    "q": "What is printed when this code runs?  \n try { \n    System.out.println( \"Try block\" ); \n} finally { \n    System.out.println( \"Finally block\" ); \n}",
    "o": [
     "Only \"Try block\"",
     "Only \"Finally block\"",
     "\"Try block\" followed by \"F inally block\"",
     "Compilation error"
    ],
    "c": 2
   },
   {
    "id": 120,
    "a": 12,
    "q": "Which Java GUI framework is lightweight?",
    "o": [
     "AWT",
     "Swing",
     "Both A and B",
     "None"
    ],
    "c": 1
   }
  ],
  "explanations": {
   "1": "Creating a .class  file from .java using javac command is a compilation task, whereas execution of a .class \nfile using  java is the process of interpretation.",
   "2": "A .class file is a complied version of the .java file in byte code (it is a kind of object code with JVM (Java \nVirtual Machine) as the target machine.",
   "3": "Dynamic memory allocation is a memory allocation strategy and not a programming paradigm.",
   "4": "The compiled code (byte code ) can be executed (interpreted) on any platform running a JVM.",
   "5": "A computer understands instructions in machine code i.e., in the form of 0s and 1s. Specia l translators \nare required for this operation like Assembler, Compiler and Interpreter. Fortran is a programming \nlanguage but not a language processor.",
   "6": "\"A platform is the hardware or software environment in which a program runs. Some of the most \npopular platforms are Microsoft Windows, Linux, Solaris OS,  and Mac OS. Most platforms can be \ndescribed as a combination of the operating system and underlying hardware. The Java platform differs \nfrom other platforms as it is a software -only platform that runs on top of other hardware -based \nplatforms.  \nThe Java pla tform has two components:  \nThe Java Virtual Machine  \nThe Java Application Programming Interface (API)",
   "7": "The Java development process involves writing code (Edit), converting it to bytecode (Compile), and then \nexecuting it on the JVM (Run).",
   "8": "The javac command converts .java source files into .class bytecode files.  \nThe java command executes the .class file using the Java Virtual Machine (JVM).",
   "9": "Java is platform -independent, object -oriented, and secure. It does not support explicit pointers, as they \ncan lead to memory management issues and compromise security.",
   "10": "Java program to print Hello, World!",
   "11": "Refers to the standard input stream , which is typically the keyboard by default.",
   "12": "30 99 187",
   "13": "839 45foo45 9foo",
   "14": "Hiding implementation details and exposing only functionality",
   "15": "Constructors are used to initialize objects.",
   "16": "Avoiding name space collision between instance variables and method parameters",
   "17": "void main(String[] args)",
   "18": "All of the above",
   "19": "printf()",
   "20": "Scanner",
   "21": "The super  keyword is used to refer to the immediate parent class. It is commonly used to invok e the \nparent class constructor or access its non -private methods and variables. However, it cannot access \nprivate members of the parent class or be used in static methods.",
   "22": "The block within  main()  tries to declare a local variable  x that has the same name as an already \nexisting variable in the same scope, which causes a compilation error. Variable names must be unique \nwithin the same scope",
   "23": "This is an example of  method overriding . The  display()  method in the  Child  class overrides the method in \nthe Parent  class. When the method is called, Java  uses dynamic method dispatch to execute \nthe Child  class implementation.",
   "24": "Abstract classes cannot be instantiated directly. They may or may not contain abstract methods. A \nsubclass inheriting an abstract class must provide implementations for all abstract methods unless it is \nalso declared abstract.",
   "25": "The fun method is a recursive function that calculates the factorial of a number. For  fun(5), the \ncomputation is  5 * 4 * 3 * 2 * 1 = 120.",
   "26": "A class marked as  final  cannot be extended, meaning it cannot have subclasses. The other statements \nabout the  final  keyword are correct.",
   "27": "The count  variable is static, meaning it is shared among all instances of the class. Each time \na Test  object is created, the constructor increments  count . Since three objects are created, the \noutput is  Count: 3 .",
   "28": "If a met hod in a subclass has the same name but different parameters, it is method overloading, not \nmethod overriding. Method overriding requires the same name and parameters.",
   "29": "There will be a compilation error:  Type mismatch: cannot convert from Parent to Child",
   "30": "The fun function calculates the sum of the first  n natural numbers using recursion. For  fun(5), the \ncomputation is  5 + 4 + 3 + 2 + 1 = 15.",
   "31": "The default access modifier (no explicit modifier specified) allows access to the method within the same \npackage but not from outside. It is also known as \"package -private.\"",
   "32": "A private method is accessible only within the same class. Any attempt to access it from another class \nresults in a compilation error.",
   "33": "1 Java  \n0 Java",
   "34": "`java.util` is a built -in Java package containing utility classes such as `ArrayList`, `HashMap`, and \n`Scanner`.",
   "35": "The `package` keyword is used in Java to define a package. For example, `package mypackage;` defines a \npackage named `mypackage`.",
   "36": "The syntax `import package.ClassName;` imports a specific class from a package. For example, `import \njava.util.Scanner;` imports the `Scanner` class from the ` java.util` package.",
   "37": "print();  \n        Derived d = new Derived();  \n        d.print();  \n    }  \n} \nHow many errors does this program contain?",
   "38": "Interfaces in Java provide a mechanism to achieve multiple inheritance because a class can implement \nmultiple interfaces.",
   "39": "If no access modifier is specified for a class, it gets the default access level, making it accessible only \nwithin the same package.",
   "40": "The `private` modifier provides the most restrictive access, allowing access only within the class where it \nis define",
   "41": "The finally  block always executes except when the JVM exits using  System.exit() . It can exist \nwithout a  catch  block and may contain a return statement, though this is not recommende",
   "42": "Variables in interfaces are  public , static , and  final  by default. Hence, the value of  x is accessible \nin the  display  metho",
   "43": "An ArithmeticException  is caught in the  catch  block, which prints “Error”. The  finally  block \nexecutes afterward, printing “Complete”.  \n   \nNPTE L Online Certification Courses  \nIndian Institute of Technology Kharagpur",
   "44": "Abstract classes can have constructors and concrete methods. Interfaces support multiple inheritance. \nBefore Java 8, interfaces could only contain abstract methods, but now they can include default and \nstatic methods.  \n   \nNPTE L Online Certification Courses  \nIndian Institute of Technology Kharagpur",
   "45": "IOException  is a checked exception, meaning it must be either caught or declared in the  throws  clause \nof a metho",
   "46": "In Java, exceptions are handled using the try, catch , and finally  blocks. The try block contains code \nthat might throw an exception, the catch  block handles specifi c exceptions, and the finally  block \nexecutes regardless of whether an exception occurs.  \n   \nNPTE L Online Certification Courses  \nIndian Institute of Technology Kharagpur",
   "47": "The throws  keyword is used in a method signature to declare the exceptions that the method might \nthrow, alerting callers to handle or propagate these exceptions.  \n   \nNPTE L Online Certification Courses  \nIndian Institute of Technology Kharagpur",
   "48": "In Java, an interface can extend multiple interfaces. Interfaces can also contain  public , static , \nand final  variables, but they cannot be instantiated directly.  \n   \nNPTE L Online Certification Courses  \nIndian Institute of Technology Kharagpur",
   "49": "The Test  class implements the  Demo  interface and provides a definition for the  display  metho",
   "50": "The Cube  class overrides the calculate  method of the Square  class.  In the Cube  class’s calculate  \nmethod, super.calculate(value)  is called, which executes the calculate  method of the Square    \nNPTE L Online Certification Courses  \nIndian Institute of Technology Kharagpur  \n \nclass.  First, \"Square: 9\" is printed by the superclass metho",
   "51": "In this program, the run() method is called directly instead of using start() . When run()  is called \nlike this, it does not create a new thread; it behaves like a regular method cal l and runs on the main \nthrea",
   "52": "Multithreading in Java allows multiple threads to run concurrently within the same program, sharing the \nsame memory spa ce. This feature makes Java programs more efficient, especially for tasks like \nmultitasking or background processing. However, proper synchronization is crucial to avoid issues like \ndata inconsistency. For a more detailed explanation of multithreading conc epts, refer to the book Joy \nwith Jav",
   "53": "In Java, a thread can only be started once. If you try to call start() on the same thread object more than \nonce, the JVM will throw an IllegalThreadStateException. This is because a thread's lifecycle allows it to \ntransition to the \" terminated\" state after completing execution, and it cannot be restarte",
   "54": "In this code, the Runnable object is created, but it is  executed directly using the run() method instead of \npassing it to a Thread object. To create a new thread, you need to use:  \nThread t = new Thread(runnable);   \nt.start();   \nWithout this, the run() method behaves like a regular method call, and no new thread is create",
   "55": "The Runnable interface is implemented by the class RunnableExample. To create a thread, the Runnable \nobject is passed to the Thread constructor, and calling start() ensures that the run() method is executed \nin a new thread.For more details on creating thre ads using Runnable, refer to the book Joy with Jav",
   "56": "The states of a thread in Java are:  \n New:  Thread is created but not starte",
   "57": "The thread scheduler uses thread priorities as a hint to determine the execution order of threads in the \nrunnable state. However, thread scheduling  also depends on the operating system's scheduling policies \nand may not strictly follow priority.  \nFor more on thread scheduling, refer to the book Joy with Jav",
   "58": "Thread priority is a hint to the thread scheduler but does not guarantee execution order. The actual \nbehavior depends on the JVM and the underlying OS. For more on thread priorities, refer to the book Joy \nwith Java .",
   "59": "Thread synchronization is used to control the access of multiple threads to shared resources, ensuring \ndata consistency and preventing race conditions. This is typically done using synchronized methods or \nblocks.  For more details on thread synchronization, refer to the book Joy with Java .",
   "60": "Byte Streams : Handle raw binary data like images or files (InputStream, OutputStream).  \nCharacter Streams : Handle text data and support encoding like Unicode (Reader, Writer).  \nCharacter Streams are better for text processing, especially when handling international characters.  \nFor a detailed understanding of Java I/O streams, refer to the book Joy with Java .",
   "61": "BufferedReader  to read the first line from the file",
   "62": "The DataOutputStream  class is used to write primitive data types (e.g.,  int , float , boolean ) to \nan output str eam.",
   "63": "The program writes the integer  100  to the file  test.dat . Using the  seek(0)  method, the file pointer \nis reset to the beginning, and  the integer is read back and printe",
   "64": "The exists()  method in the  File  class checks if a file or directory exists in the specified path.",
   "65": "The SequenceInputStream  combines  input1  and input2  streams sequentially. It first reads the \ncontent of  input1  (123 ), followed by  input2  (ABC ), resulting in  123ABC .",
   "66": "i is assigned a value twice. Final variables can be assigned values only one. Following is the compiler \nerror “Main.java:5: error: variable i might already have been assigned” .",
   "67": "No output is printe",
   "68": "Here the class instance variable name(num) is same as calc() method local variable name(num). So for \nreferencing class instance variable from calc() method, this keyword is use",
   "69": "The output of this program will be the character 'j' because the Unicode code point for 106 \ncorresponds to 'j'.",
   "70": "The length() method on the File object, which returns the size of the file in bytes.",
   "71": "Check box is used for multiple  selection item s whereas radio button is used for single  selection.",
   "72": "JavaFX",
   "73": "Option 1",
   "74": "Option 1",
   "75": "Option 1",
   "76": "FlowLayout",
   "77": "Abstract Window Toolkit",
   "78": "Button",
   "79": "There is a Frame with two Labels and two TextFields.",
   "80": "Clicking on a check box changes its state from \"on\" to \"off,\" or from \"off\" to \"on.\"",
   "81": "JComboBox  is a Swing component that provides  a drop -down list from which users can select one \noption.",
   "82": "The FlowLayout  layout manager arranges components in a row. Here, both buttons are added and \ndisplayed in the frame.",
   "83": "JLabel  can display both text and images/icons. It is commonly used for non -interactive purposes in \nSwing GUIs.",
   "84": "The mouseClicked()  method in the  MouseListener  interface is used to handle mouse click \nevents in Java Swing.",
   "85": "The add()  method is used to add components like buttons, text fields, or panels to a JFrame.",
   "86": "The setLayout()  method is used to define the layout manager for a panel. FlowLayout  is the default \nlayout for JPanel.",
   "87": "The JLabel  has to be  added to the frame using add() . The frame is visible, but the label is not \ndisplayed  as it has not been added .",
   "88": "The code exte nds JFrame  and uses the JButton  class object to create a button with the name of \n“",
   "89": "The code creates a button with label “Click Me” and in the frame titled “",
   "90": "BoxLayout  lays out comp onents in either a column or a row. You can specify extra space using an \ninvisible component.",
   "91": "JButton",
   "92": "A toggle button allows users to switch between two states, such as \"on\" or \"off.\" It behaves like a \ncheckbox, but it is represented as a button.",
   "93": "To interact with databases for data retrieval and manipulation",
   "94": "isUp()",
   "95": "Socket and ServerSocket",
   "96": "The website provides a secure connection.",
   "97": "SMTP",
   "98": "The code snippet establishes a connection to a MySQL database, executes a SELECT query to retrieve \ndata from the \"employees\" table, and prints the results.",
   "99": "The URL  class provides methods to work with Uniform Resource Locators.",
   "100": "ServerSocket  is used to listen for incoming connections on a specific port, enabling communication \nwith clients in server -client applications.",
   "101": "Java Database Connectivity",
   "102": "Option 1",
   "103": "Option 1",
   "104": "Option 1",
   "105": "Option 1",
   "106": "I, II, and III",
   "107": "To manage database connections.",
   "108": "By using the DriverManager.getConnection() method",
   "109": "executeQuery()",
   "110": "Option 1",
   "111": "In Java, a thread can be created either by extending the Thread  class or by implementing the Runnable  \ninterface.",
   "112": "The start()  method is used to begin execution of a new threa",
   "113": "FlowLayout  arranges components in a row, in the order they are adde",
   "114": "The setSize(width, height)  method sets the size of the JFrame, where 400 is the width and 300 is \nthe height.",
   "115": "The ResultSet  object contains all records from the table, including those with null values.",
   "116": "The length()  method returns the number of characters in a string. \"hello\"  has 5 characters.",
   "117": "In Java, an array is declared using int[] arr = new int[5];  where 5 is the size.",
   "118": "Indexing in Java starts from 0, so charAt(1)  returns the second character, which is",
   "119": "The finally  block always executes, even if no exception occurs.",
   "120": "Swing is a lightweight GUI framework  compared to AWT, which is heavyweight."
  }
 },
 "pyq_2025_2026": {
  "id": "pyq_2025_2026",
  "title": "PYQ 2025 – 2026 (NOC 26-CS36)",
  "subtitle": "120 MCQs from January 2025 to 2026 Session",
  "badge": "2025 – 2026",
  "count": 120,
  "questions": [
   {
    "id": 1,
    "a": 1,
    "q": "Which of the following is true regarding how Java handles code execution?",
    "o": [
     "Java uses only interpreter.",
     "Java uses only compiler.",
     "Java uses both interpreter and compiler.",
     "None of the above."
    ],
    "c": 2
   },
   {
    "id": 2,
    "a": 1,
    "q": "A Java file with extension ‘.class’ contains:",
    "o": [
     "Java source code",
     "HTML tags",
     "Java Byte code",
     "A program ﬁle writen in Java programming language"
    ],
    "c": 2
   },
   {
    "id": 3,
    "a": 1,
    "q": "Which of the following is NOT an object -oriented programming paradigm?",
    "o": [
     "Encapsulation",
     "Inheritance",
     "Polymorphism",
     "Dynamic memory allocation"
    ],
    "c": 3
   },
   {
    "id": 4,
    "a": 1,
    "q": "What is the correct sequence of steps to execute a Java program?",
    "o": [
     "Run → Edit → Compile",
     "Edit → Run → Compile",
     "Compile → Edit → Run",
     "Edit → Compile → Run"
    ],
    "c": 3
   },
   {
    "id": 5,
    "a": 1,
    "q": "Which program is used to compile Java source code into bytecode?",
    "o": [
     "javap",
     "javac",
     "java",
     "javad"
    ],
    "c": 1
   },
   {
    "id": 6,
    "a": 1,
    "q": "In Java, what is the role of the public static void main(String[] args) method?",
    "o": [
     "Initialization method",
     "Execution entry point",
     "Constructor",
     "Destructor"
    ],
    "c": 1
   },
   {
    "id": 7,
    "a": 1,
    "q": "Which of the following is not a feature of Java?",
    "o": [
     "Platiorm Independence",
     "Object -Oriented Programming",
     "Supports Explicit Pointers",
     "Supports Polymorphism"
    ],
    "c": 2
   },
   {
    "id": 8,
    "a": 1,
    "q": "What is the primary purpose of the Java Virtual Machine (JVM) in the Java programming language?",
    "o": [
     "Graphical User Interface",
     "Platiorm independence",
     "Code Debugging",
     "Game Engine"
    ],
    "c": 1
   },
   {
    "id": 9,
    "a": 1,
    "q": "Consider the following program.  \npublic class Question { \n    public static void main(String[] args) { \n        int x = 5; \n        x *= (2 + 8); \n        System.out.println(x); \n    } \n} \nWhat is the output of the above code?",
    "o": [
     "50",
     "10",
     "Compiler error",
     "5"
    ],
    "c": 0
   },
   {
    "id": 10,
    "a": 1,
    "q": "Consider the following program.  \nclass",
    "o": [
     "Hello, World!",
     "HelloWorld!",
     "Compilation Error",
     "Runtime Error"
    ],
    "c": 0
   },
   {
    "id": 11,
    "a": 2,
    "q": "How do you read a line of text from the console using the Scanner  class in Java?",
    "o": [
     "scanner.readLine()",
     "scanner.nextLine()",
     "scanner.getLine()",
     "scanner.fetchLine()"
    ],
    "c": 1
   },
   {
    "id": 12,
    "a": 2,
    "q": "What will be the output of the following Java program?\npublic class VarPrint {\nint x = 30;\nstatic int y = 20;\npublic static void main(String[] args) {\nVarPrint  t1 = new VarPrint ();\nt1.x = 99;\nt1.y = 88;\nint z1 = t1.x + t1.y;\nVarPrint  t2 = new VarPrint ();\nSystem.out.println(t2.x + \" \" + t2.y + \" \" + z1);\n}\n}",
    "o": [
     "30 99 178",
     "30 88 129",
     "30 99 187",
     "30 88 187"
    ],
    "c": 3
   },
   {
    "id": 13,
    "a": 2,
    "q": "What will be the output of the following Java program?\npublic class ArgumenTest {\npublic static void main(String[] args) {\nTest t = new Test();\nt.start();\n}\nstatic class Test {\nvoid start() {\nint a = 4;\nint b = 5;\nSystem.out.print(\"\" + 8 + 3 + \"\");\nSystem.out.print(a + b);\nSystem.out.print(\" \" + a + b + \"\");\nSystem .out.print( a + b + \"\");\nSystem.out.print(foo() + a + b + \" \");\nSystem.out.println(a + b + foo ());\n}\nString foo() {\nreturn \"foo\";\n}\n}\n}",
    "o": [
     "9 7 7 foo34 34foo",
     "839 45foo45 9foo",
     "839 459foo45 9foo",
     "9 7 7 foo 7 7foo"
    ],
    "c": 2
   },
   {
    "id": 14,
    "a": 2,
    "q": "What is encapsulation in object -oriented programming?",
    "o": [
     "Hiding implementation details and exposing only functionality",
     "The process of creating multiple objects in a program",
     "Writing multiple methods in a single class",
     "Using the this keyword to reference an object"
    ],
    "c": 0
   },
   {
    "id": 15,
    "a": 2,
    "q": "Consider the following code snippet\nclass",
    "o": [
     "0",
     "101",
     "100",
     "Runtime error"
    ],
    "c": 1
   },
   {
    "id": 16,
    "a": 2,
    "q": "What does the this keyword in Java help to achieve?",
    "o": [
     "Avoiding name space collision between instance variables and method parameters",
     "Overloading methods in a class",
     "Accessing private methods in another class",
     "Creating multiple objects in a program"
    ],
    "c": 0
   },
   {
    "id": 17,
    "a": 2,
    "q": "Which method is used as the starting point of execution in a Java program?",
    "o": [
     "init method",
     "start method",
     "main method",
     "run method"
    ],
    "c": 2
   },
   {
    "id": 18,
    "a": 2,
    "q": "Which of the following  is used to display output in Java?",
    "o": [
     "input",
     "display",
     "print",
     "System"
    ],
    "c": 2
   },
   {
    "id": 19,
    "a": 2,
    "q": "Which symbol is used to end a statement in Java?",
    "o": [
     ":",
     ".",
     ";",
     ","
    ],
    "c": 2
   },
   {
    "id": 20,
    "a": 2,
    "q": "Which of the following is a valid Java keyword?",
    "o": [
     "number",
     "class",
     "include",
     "deﬁne"
    ],
    "c": 1
   },
   {
    "id": 21,
    "a": 3,
    "q": "Which of the following statements is true regarding the order of execution of constructors in an \ninheritance hierarchy?",
    "o": [
     "Derived class constructor will be called followed by the base class constructor.",
     "Only Base class constructor will be calle",
     "Only derived class constructor will be calle",
     "Base class constructor will be called followed by the derived class constructor."
    ],
    "c": 3
   },
   {
    "id": 22,
    "a": 3,
    "q": "The super() method is used to:",
    "o": [
     "Call constructor of friend class",
     "Call constructor of the parent class",
     "Call constructor",
     "Is a declared method"
    ],
    "c": 1
   },
   {
    "id": 23,
    "a": 3,
    "q": "What is the output of the following Java program?  \nclass Vehicle { \n    public void move() { \n        System.out.println(\"The vehicle moves\"); \n    } \n} \n \nclass Car extends Vehicle { \n    public void move() { \n        System.out.println(\"The car moves\"); \n    } \n} \n \npublic class Main { \n    public static void main(String[] args) { \n        Vehicle vehicle = new Car(); \n        vehicle.move(); \n    } \n}",
    "o": [
     "\"The vehicle moves\"",
     "\"The car moves\"",
     "The code does not compile",
     "None of the above"
    ],
    "c": 1
   },
   {
    "id": 24,
    "a": 3,
    "q": "Which of the following is NOT true regarding the final keyword in Java?",
    "o": [
     "A ﬁnal method cannot be overridden in a subclass.",
     "A ﬁnal variable can only be assigned once.",
     "A ﬁnal class can have subclasses.",
     "A ﬁnal variable can be assigned during declaration or in the constructor."
    ],
    "c": 2
   },
   {
    "id": 25,
    "a": 3,
    "q": "Which type of inheritance leads to the \"Diamond Problem\"?",
    "o": [
     "Single level",
     "Multi -level",
     "Multiple",
     "Hierarchical"
    ],
    "c": 2
   },
   {
    "id": 26,
    "a": 3,
    "q": "Members of a class which are not intended to be inherited by subclasses should be declared as:",
    "o": [
     "Public members",
     "Protected members",
     "Private members",
     "Private or Protected members"
    ],
    "c": 2
   },
   {
    "id": 27,
    "a": 3,
    "q": "In Java, is it possible to override a static method?",
    "o": [
     "Yes, we can override a static method just like we do with instance methods.",
     "No, static methods cannot be overridden because they belong to the class, not the object.",
     "It depends on whether the static method is declared as ﬁnal or not.",
     "It depends on the access modiﬁer of the static metho"
    ],
    "c": 1
   },
   {
    "id": 28,
    "a": 3,
    "q": "What is the output of the following Java program?  \npublic class",
    "o": [
     "5",
     "24",
     "120",
     "Runtime Error"
    ],
    "c": 2
   },
   {
    "id": 29,
    "a": 3,
    "q": "Which of the following statements about abstract classes in Java is correct?",
    "o": [
     "Abstract classes can be instantiated directly.",
     "An abstract class must contain at least one abstract metho",
     "A class inheriting from an abstract class must implement all its abstract methods unless it is \nitself abstract.",
     "Abstract classes can be marked as ﬁnal."
    ],
    "c": 2
   },
   {
    "id": 30,
    "a": 3,
    "q": "What will be the output of the below program?  \nclass superDemoClass { \n    final int a = 20; \n} \n \nclass subDemoClass extends superDemoClass { \n    void subFunc() { \n        a = 40; \n        System.out.println(\"value of a = \" + a); \n    } \n} \n \nclass demo { \n    public static void main(String[] args) { \n        subDemoClass subc = new subDemoClass(); \n        subc.subFunc(); \n    } \n}",
    "o": [
     "value of a = 20",
     "error: cannot assign a value to ﬁnal variable a",
     "subFunc(); \n    } \n}",
     "value of a = 40"
    ],
    "c": 1
   },
   {
    "id": 31,
    "a": 4,
    "q": "Which access modifier allows access only inside the same package?",
    "o": [
     "default",
     "private",
     "public",
     "protected"
    ],
    "c": 0
   },
   {
    "id": 32,
    "a": 4,
    "q": "Which constructor is called first when an object of a child class is created?  The method will be \naccessible.",
    "o": [
     "Child class constructor",
     "Parent class constructor",
     "Interface constructor",
     "Package constructor"
    ],
    "c": 1
   },
   {
    "id": 33,
    "a": 4,
    "q": "What will be the output of the following code?  \nclass Person {  \n    int a = 1;  \n    int b = 0;  \n    public Person() {  \n        System.out.println(a + b + \" Java \" );  \n    }  \n}  \n \nclass Employee extends Person {  \n    int a = 0;  \n    int b = 1;  \n    public Employee() {  \n        System.out.println( \"\"+a + b + \" Java \" );  \n    }  \n}  \n \npublic class Question {  \n    public static void main(String args[]) {  \n        Person p = new Employee();  \n    }  \n}",
    "o": [
     "1 Java 10  \n0 Java 0",
     "1 Java  \n0 Java",
     "1 Java  \n01 Java",
     "1 java 1  \n0 Java 0"
    ],
    "c": 2
   },
   {
    "id": 34,
    "a": 4,
    "q": "Which statement is used to use a class from another package?",
    "o": [
     "package",
     "include",
     "import",
     "extends"
    ],
    "c": 2
   },
   {
    "id": 35,
    "a": 4,
    "q": "What keyword is used to define a package in Java?",
    "o": [
     "deﬁne",
     "package",
     "import",
     "namespace"
    ],
    "c": 1
   },
   {
    "id": 36,
    "a": 4,
    "q": "How do you import a specific class from a package in Java?",
    "o": [
     "import package.* ;",
     "import package.ClassName;",
     "include package.ClassName;",
     "use package.ClassName;"
    ],
    "c": 1
   },
   {
    "id": 37,
    "a": 4,
    "q": "Consider the following 2 programs:  \n// Main1.java ------------------ \npublic class Main1{ \n    public static void main(String args[]){   \n        int number = 10; \n        System.out.println(number++ + ++number); \n    } \n} \n \n// Main2.java ------------------ \npublic class Main2{ \n    public static void main(String args[]){   \n        int number = 10; \n        System.out.println(++number + number++); \n    } \n} \nChoose the best option among the following for the code snippet given above",
    "o": [
     "Both pre -increment and post -increment operators becomes pre -increment during print.",
     "Both pre -increment and post -increment operators becomes po st-increment during print.",
     "Both Main1 and Main2 classes give the same output.",
     "Pre-increment and post -increment operators don’ t work during print."
    ],
    "c": 2
   },
   {
    "id": 38,
    "a": 4,
    "q": "Consider the code given below.  \n// Teacher.java ------------------ \npackage",
    "o": [
     "100 Marks",
     "No output",
     "Compiler error",
     "None of the above"
    ],
    "c": 0
   },
   {
    "id": 39,
    "a": 4,
    "q": "What will happen if you do not specify an access modifier for a class in a package?",
    "o": [
     "The class will be `priv ate` by default.",
     "The class will be `protected` by default.",
     "The class will be accessible only within the same package.",
     "The class will be `public` by default."
    ],
    "c": 2
   },
   {
    "id": 40,
    "a": 4,
    "q": "Which access modifier provides the most restrictive access in Java?",
    "o": [
     "default",
     "protected",
     "private",
     "public"
    ],
    "c": 2
   },
   {
    "id": 41,
    "a": 5,
    "q": "Which keyword is NOT used by Java during exception handling?",
    "o": [
     "try",
     "catch",
     "final",
     "finally"
    ],
    "c": 2
   },
   {
    "id": 42,
    "a": 5,
    "q": "What is the purpose of the  throws  keyword in Java?",
    "o": [
     "To declare exceptions that a met hod can throw",
     "To throw an exception immediately",
     "To catch an exception",
     "It is not a keyword in Java"
    ],
    "c": 0
   },
   {
    "id": 43,
    "a": 5,
    "q": "Which of the following is TRUE about interfaces in Java?",
    "o": [
     "Interfaces should always be defined as final",
     "Interfaces can be instantiated directly.",
     "Interfaces can extend multiple interfaces.",
     "Interfaces  cannot have any method  signatures"
    ],
    "c": 2
   },
   {
    "id": 44,
    "a": 5,
    "q": "What will be  the output of the following code?  \ninterface  Demo { \n    void display(); \n} \n \nclass Test implements  Demo { \n    public void display() { \n        System.out.println(\"Hello,",
    "o": [
     "Hello,",
     "Compilation Error",
     "Runtime Error",
     "No Output"
    ],
    "c": 0
   },
   {
    "id": 45,
    "a": 5,
    "q": "What will be the output of the following Java program?  \ninterface  Calculator { \n    void calculate (int value); \n} \n \nclass Square implements  Calculator { \n    int result; \n    public void calculate (int value) {  \n        result = value * value;  \n        System.out.print(\"Square: \"  + result + \" \"); \n    } \n} \n \nclass Cube extends Square { \n    public void calculate (int value) {  \n        result = value * value * value;  \n        super.calculate (value);  \n        System.out.print(\"Cube: \" + result + \" \"); \n    } \n} \n \npublic class Main { \n    public static void main(String[] args) {  \n        Calculator  obj = new Cube(); \n        obj.calculate (3); \n    } \n}",
    "o": [
     "Square: 9 Cube: 9",
     "Cube: 27 Square: 9",
     "Square: 9 Square: 27 Cube: 27",
     "Square: 9 Cube: 27 Square: 27"
    ],
    "c": 0
   },
   {
    "id": 46,
    "a": 5,
    "q": "What will be the output of the following program?  \nclass",
    "o": [
     "5 Complete",
     "Error Complete",
     "Runtime Error",
     "Compilation Error"
    ],
    "c": 1
   },
   {
    "id": 47,
    "a": 5,
    "q": "What will be  the output of the following Java program?  \ninterface  A { \n    int x = 10; \n    void display(); \n} \nclass B implements  A { \n    public void display() { \n        System.out.println(\"Value of x: \"  + x); \n    } \n} \npublic class Main { \n    public static void main(String[] args) {  \n        B obj = new B(); \n        obj.display(); \n    } \n}",
    "o": [
     "Value of x: 10",
     "Value of x: 0",
     "Compilation Error",
     "Runtime Error"
    ],
    "c": 0
   },
   {
    "id": 48,
    "a": 5,
    "q": "Which keyword is used by Java during exception handling?",
    "o": [
     "final",
     "finally",
     "caught",
     "finished"
    ],
    "c": 1
   },
   {
    "id": 49,
    "a": 5,
    "q": "A method that potentially generates a checked exception must include this keyword in its method \nsignature:",
    "o": [
     "throw",
     "extend",
     "throws",
     "extends"
    ],
    "c": 2
   },
   {
    "id": 50,
    "a": 5,
    "q": "Consider the following code.  \nclass Test extends Exception {} \n \nclass Main { \n \n  public static void main(String args[]) {  \n    try { \n      throw new Test(); \n    } catch (Test t) { \n      System.out.println(\"Got the Test Exception\" ); \n    } finally { \n      System.out.println(\"Inside finally block \" ); \n    } \n  } \n} \nWhat will be the output of the above code?",
    "o": [
     "Got the Test Exception  \nInside finally block",
     "Got the Test Exception",
     "Inside finally block",
     "Compiler Error"
    ],
    "c": 0
   },
   {
    "id": 51,
    "a": 6,
    "q": "Which method is used to start a new thread in Java?",
    "o": [
     "run()",
     "start()",
     "execute()",
     "begin()"
    ],
    "c": 1
   },
   {
    "id": 52,
    "a": 6,
    "q": "Which interface must be implemented to create a thread using the Runnable approach?",
    "o": [
     "Threadable",
     "Runnable",
     "Callable",
     "Executor"
    ],
    "c": 1
   },
   {
    "id": 53,
    "a": 6,
    "q": "What happens if a thread’s run()  method completes execution?",
    "o": [
     "The thread enters the waiting state",
     "The thread can be restarted",
     "The thread enters the terminated state",
     "The thread returns to the r unnable state"
    ],
    "c": 2
   },
   {
    "id": 54,
    "a": 6,
    "q": "Which keyword is used to synchronize a method in Java?",
    "o": [
     "Lock",
     "Threadsafe",
     "Synchronized",
     "Volatile"
    ],
    "c": 2
   },
   {
    "id": 55,
    "a": 6,
    "q": "Which of the following is the default priority of a Java thread?",
    "o": [
     "1",
     "3",
     "5",
     "2"
    ],
    "c": 2
   },
   {
    "id": 56,
    "a": 6,
    "q": "Which method causes the currently executing thread to pause for a specified time?",
    "o": [
     "wait()",
     "sleep()",
     "pause()",
     "delay()"
    ],
    "c": 1
   },
   {
    "id": 57,
    "a": 6,
    "q": "Which exception is thrown when sleep()  is interrupted?",
    "o": [
     "RuntimeException",
     "IOException",
     "InterruptedException",
     "ThreadException"
    ],
    "c": 2
   },
   {
    "id": 58,
    "a": 6,
    "q": "Which class is used to read text data efficiently from a file in Java?",
    "o": [
     "FileInputStream",
     "BufferedReader",
     "DataInputStream",
     "ObjectInputStream"
    ],
    "c": 1
   },
   {
    "id": 59,
    "a": 6,
    "q": "Which method is used to read a line of text using BufferedReader ?",
    "o": [
     "read()",
     "readText()",
     "readLine()",
     "getLine()"
    ],
    "c": 2
   },
   {
    "id": 60,
    "a": 6,
    "q": "Which class is the superclass of all input byte streams in Java?",
    "o": [
     "Reader",
     "InputStream",
     "FileInputStream",
     "BufferedInputStream"
    ],
    "c": 1
   },
   {
    "id": 61,
    "a": 7,
    "q": "What will be the output of the following Java program?  \nimport jav",
    "o": [
     "io. *; \nclass ReadFile { \n    public static void main(String[] args) throws IOException  { \n        FileReader  fr = new FileReader (\"",
     "This is Programming in Java online course.",
     "IOException",
     "null"
    ],
    "c": 1
   },
   {
    "id": 62,
    "a": 7,
    "q": "Complete the following snippet  with the required code.  \nFile file = new File(\"file.txt\" ); \nif (__________________) // Fill in the blank s \n{ \n    System.out.println(\"File exists.\" ); \n} else  \n{ \n    System.out.println(\"File does not exist.\" ); \n}",
    "o": [
     "file.exists()",
     "file.isFile()",
     "file.fileExists()",
     "file.isAvailable()"
    ],
    "c": 0
   },
   {
    "id": 63,
    "a": 7,
    "q": "What is the output of the following Java program?  \nclass Main { \n \n  public static void main(String args[]) {  \n    final int i; \n    i = 20; \n    i = 30; \n    System.out.println(i); \n  } \n}",
    "o": [
     "30",
     "Compiler Error",
     "Garbage value",
     "0"
    ],
    "c": 1
   },
   {
    "id": 64,
    "a": 7,
    "q": "Which of these values is returned by read() method  when the  end of file (EOF) is encountered?",
    "o": [
     "0",
     "1",
     "-1",
     "Null"
    ],
    "c": 2
   },
   {
    "id": 65,
    "a": 7,
    "q": "What will be the output of the following Java program?  \npublic class Calculator { \n    int num = 100; \n \n    public void calc(int num) { \n        this.num = num * 10; \n    } \n \n    public void printNum () { \n        System.out.println(num); \n    } \n \n    public static void main(String[] args) {  \n        Calculator  obj = new Calculator (); \n        obj.calc(2); \n        obj.printNum (); \n    } \n}",
    "o": [
     "20",
     "100",
     "1000",
     "2"
    ],
    "c": 0
   },
   {
    "id": 66,
    "a": 7,
    "q": "What is the primary difference between Byte Streams and Character Streams in Java?",
    "o": [
     "Byte Streams handle characters, while Character Streams handle bytes.",
     "Byte Streams are used for binary data, while Character Streams are used for image dat",
     "Character Streams are faster than Byte Streams in all cases.",
     "Byte Streams are used for binary data, while Character St reams are used for text data ."
    ],
    "c": 3
   },
   {
    "id": 67,
    "a": 7,
    "q": "What is the primary purpose of  thread synchronization in Java?",
    "o": [
     "To allow multiple threads to execute a method at the same time",
     "To ensure thread execution follows a specific order",
     "To prevent ra re conditions and ensure data in-consistency",
     "To prevent race conditions and ensure data consist ency"
    ],
    "c": 3
   },
   {
    "id": 68,
    "a": 7,
    "q": "Which stream does Java application uses to only READ data from a source, it may be a file, an array, \nperipheral device or socket?",
    "o": [
     "InputStream",
     "OutputStream",
     "Input/OutputStream",
     "DataOutputStream"
    ],
    "c": 0
   },
   {
    "id": 69,
    "a": 7,
    "q": "Which class in Java is used to create a new directory?",
    "o": [
     "FileReader",
     "FileWriter",
     "File",
     "Directory"
    ],
    "c": 2
   },
   {
    "id": 70,
    "a": 7,
    "q": "What is the primary purpose of input streams in Java?",
    "o": [
     "To write data to a file.",
     "To read data from a file.",
     "To delete a file.",
     "To create directories."
    ],
    "c": 1
   },
   {
    "id": 71,
    "a": 8,
    "q": "Which package must be imported to use AWT components in Java?",
    "o": [
     "java.swing.*",
     "java.awt.*",
     "java.gui.*",
     "java.window.*"
    ],
    "c": 1
   },
   {
    "id": 72,
    "a": 8,
    "q": "Which AWT class is used to create a top -level window?",
    "o": [
     "Panel",
     "Dialog",
     "Frame",
     "WindowManager"
    ],
    "c": 2
   },
   {
    "id": 73,
    "a": 8,
    "q": "Which method is used to make an AWT Frame visible?",
    "o": [
     "show()",
     "display()",
     "setVisible(true)",
     "open()"
    ],
    "c": 2
   },
   {
    "id": 74,
    "a": 8,
    "q": "Which layout manager is the default for an AWT Frame ?",
    "o": [
     "FlowLayout",
     "GridLayout",
     "BorderLayout",
     "CardLayout"
    ],
    "c": 2
   },
   {
    "id": 75,
    "a": 8,
    "q": "Which method is used to add a component to an AWT container?",
    "o": [
     "insert()",
     "attach()",
     "add()",
     "append()"
    ],
    "c": 2
   },
   {
    "id": 76,
    "a": 8,
    "q": "Which AWT component is used to display non -editable text?",
    "o": [
     "TextField",
     "TextArea",
     "Label",
     "Button"
    ],
    "c": 2
   },
   {
    "id": 77,
    "a": 8,
    "q": "Which layout manager places components one after another from left to right and wraps to the next \nline if needed?",
    "o": [
     "GridLayout",
     "BorderLayout",
     "FlowLayout",
     "CardLayout"
    ],
    "c": 2
   },
   {
    "id": 78,
    "a": 8,
    "q": "Which method is used to enable absolute positioning for components in AWT?",
    "o": [
     "setBounds()",
     "setLayout(null)",
     "setPosition()",
     "setCoordinates()"
    ],
    "c": 1
   },
   {
    "id": 79,
    "a": 8,
    "q": "Which listener interface is used to handle button click events in AWT?",
    "o": [
     "PrintListener",
     "KeyListener",
     "ActionListener",
     "WindowListener"
    ],
    "c": 2
   },
   {
    "id": 80,
    "a": 8,
    "q": "Which method is used to specify the size of an AWT Frame?",
    "o": [
     "resize()",
     "setBounds()",
     "setSize()",
     "setDimension()"
    ],
    "c": 2
   },
   {
    "id": 81,
    "a": 9,
    "q": "The container displays a number of components in a row, but adjusts according to the window size.  \n             \nWhich of the following layout manager(s) is most naturally suited for  the layout given below?",
    "o": [
     "FlowLayout",
     "BorderLayout",
     "GridLayout",
     "BoxLayout"
    ],
    "c": 0
   },
   {
    "id": 82,
    "a": 9,
    "q": "In Java, what is the primary purpose of a layout manager?",
    "o": [
     "To manage memory allocation",
     "To arrange GUI components within a container",
     "To handle exception handling",
     "To control database connections"
    ],
    "c": 1
   },
   {
    "id": 83,
    "a": 9,
    "q": "Consider the following code.  \nimport javax.swing. *; \nimport jav",
    "o": [
     "awt.event. *; \npublic class",
     "A message dialog with the text \"Welcome  to the course\" is displayed",
     "The button label changes to \"Welcome to the course\"",
     "Nothing happens"
    ],
    "c": 1
   },
   {
    "id": 84,
    "a": 9,
    "q": "Consider the following code.  \nimport javax.swing. *; \n \npublic class",
    "o": [
     "Creates a JFrame with a JButton labeled \"Programming in Java\"",
     "Compiles with errors",
     "Displays a message dialog",
     "Creates a JPanel with a JButton labeled \"Programming in Java\""
    ],
    "c": 0
   },
   {
    "id": 85,
    "a": 9,
    "q": "Consider the following code.  \nimport javax.swing. *; \n \npublic class FrameExample { \n    public static void main(String[] args) {  \n        JFrame frame = new JFrame(\"Demo Frame\" ); \n        JButton button = new JButton(\"Click Me\" ); \n        // INSERT CODE HERE  \n        frame.setSize(300, 200); \n        frame.setVisible (true); \n    } \n} \nWhat should replace // INSERT CODE HERE  to create a JFrame  with a JButton  labeled \n\"Click Me\" ?",
    "o": [
     "frame.add(button);",
     "frame.insert(button);",
     "frame.append(button);",
     "frame.push(button);"
    ],
    "c": 0
   },
   {
    "id": 86,
    "a": 9,
    "q": "Identify and correct the error in the following program:  \nimport javax.swing. *; \nimport jav",
    "o": [
     "awt. *; \n \npublic class PanelExample { \n    public static void main(String[] args) {  \n        JFrame frame = new JFrame(\"Panel Example\" ); \n        JPanel panel = new JPanel(); \n        JButton button = new JButton(\"Submit\" ); \n        panel.setFlowLayout (); // ERROR \n        panel.add(button);  \n        frame.add(panel);  \n        frame.setSize(300, 200); \n        frame.setDefaultCloseOperation (JFrame.EXIT_ON_CLOSE ); \n        frame.setVisible (true); \n    } \n} \nWhat should the erroneous line ( panel.setFlowLayout(); ) be replaced with?",
     "panel.addFlowLayout();",
     "panel.appendLayout(new FlowLayout());",
     "panel.setLayout(new FlowLayout());"
    ],
    "c": 3
   },
   {
    "id": 87,
    "a": 9,
    "q": "Which method is used to remove a component from a container in AWT?",
    "o": [
     "remove()",
     "deleteComponent()",
     "removeComponent()",
     "destroy()"
    ],
    "c": 0
   },
   {
    "id": 88,
    "a": 9,
    "q": "Which method is used to handle mouse click events in Java Swing?",
    "o": [
     "mouseClicked()",
     "keyPressed()",
     "actionPerformed()",
     "componentShown()"
    ],
    "c": 0
   },
   {
    "id": 89,
    "a": 9,
    "q": "Which Swing component is best suited for displaying a drop -down list of selectable options?",
    "o": [
     "JButton",
     "JComboBox",
     "JTextField",
     "JPanel"
    ],
    "c": 1
   },
   {
    "id": 90,
    "a": 9,
    "q": "Which of the following function is used to specify the layout of a container.",
    "o": [
     "UseLayout()",
     "setLayout()",
     "layout()",
     "DesignLayout()"
    ],
    "c": 1
   },
   {
    "id": 91,
    "a": 10,
    "q": "Which Java package contains networking -related classes?",
    "o": [
     "java.io",
     "java.util",
     "java.net",
     "java.lang"
    ],
    "c": 2
   },
   {
    "id": 92,
    "a": 10,
    "q": "Which class is used to represent an IP address in Java?",
    "o": [
     "IPAddress",
     "InetAddress",
     "NetAddress",
     "HostAddress"
    ],
    "c": 1
   },
   {
    "id": 93,
    "a": 10,
    "q": "Which method is used to obtain the IP address from an InetAddress  object?",
    "o": [
     "getAddress()",
     "getIP()",
     "getHostAddress()",
     "getNetworkAddress()"
    ],
    "c": 2
   },
   {
    "id": 94,
    "a": 10,
    "q": "Which protocol is used by Socket  in Java for communication?",
    "o": [
     "UDP",
     "HTTP",
     "TCP",
     "FTP"
    ],
    "c": 2
   },
   {
    "id": 95,
    "a": 10,
    "q": "Which class is used to create a server- side socket in Java?",
    "o": [
     "Socket",
     "ClientSocket",
     "ServerSocket",
     "NetServer"
    ],
    "c": 2
   },
   {
    "id": 96,
    "a": 10,
    "q": "Which method converts a URI object into a URL object?",
    "o": [
     "convertURL()",
     "getURL()",
     "toURL()",
     "openURL()"
    ],
    "c": 2
   },
   {
    "id": 97,
    "a": 10,
    "q": "What value does getPort()  return if no port is specified in the URL?",
    "o": [
     "0",
     "80",
     "-1",
     "443"
    ],
    "c": 2
   },
   {
    "id": 98,
    "a": 10,
    "q": "Which protocol is connectionless?",
    "o": [
     "TCP",
     "HTTP",
     "UDP",
     "SMTP"
    ],
    "c": 2
   },
   {
    "id": 99,
    "a": 10,
    "q": "Which method is used by a client to establish a connection with a server?",
    "o": [
     "accept()",
     "connect()",
     "listen()",
     "open()"
    ],
    "c": 1
   },
   {
    "id": 100,
    "a": 10,
    "q": "Which layer of the OSI model does TCP belong to?",
    "o": [
     "Application layer",
     "Network layer",
     "Transport layer",
     "Data link layer"
    ],
    "c": 2
   },
   {
    "id": 101,
    "a": 11,
    "q": "How do you establish a connection to a database using JDBC?",
    "o": [
     "By creating an instance of the Connection interface",
     "By using the DriverManager.getConnection() method",
     "By implementing the Connection interface",
     "By extending the Connection class"
    ],
    "c": 1
   },
   {
    "id": 102,
    "a": 11,
    "q": "Which method executes a simple query and returns a single Result Set object?",
    "o": [
     "executeQuery()",
     "executeUpdate()",
     "execute()",
     "run()"
    ],
    "c": 0
   },
   {
    "id": 103,
    "a": 11,
    "q": "Which of the following ensures that the correct driver is used to access each data source ?",
    "o": [
     "java.sql. Manager",
     "java.sql.DriverManager",
     "java.sql.Statement",
     "java.sql.Drive rSession"
    ],
    "c": 1
   },
   {
    "id": 104,
    "a": 11,
    "q": "What is the purpose of the ResultSet interface in JDBC?",
    "o": [
     "To store the result of a query",
     "To execute SQL queries",
     "To manage database connections",
     "To update data in the database"
    ],
    "c": 0
   },
   {
    "id": 105,
    "a": 11,
    "q": "What does setAutoCommit(false) do?",
    "o": [
     "commits transaction after each query",
     "explicitly commits transaction",
     "does not commit transaction automatically after each query",
     "never commits transaction"
    ],
    "c": 2
   },
   {
    "id": 106,
    "a": 11,
    "q": "The following is a statement in Java using JDBC.  \nConnection con = DriverManager. getConnection( \n    \"jdbc:mysql://localhost:3306/",
    "o": [
     "3306 is the default MySQL port.",
     "Database name is ‘",
     "The database server is hosted on IP 127.0.0.1",
     "Username is ‘java’ and the password is ‘joy’"
    ],
    "c": 3
   },
   {
    "id": 107,
    "a": 11,
    "q": "What is  the correct order to close database resources?",
    "o": [
     "Connection then Statement then ResultSet",
     "ResultSet then Statement then Connection",
     "Statement then Connection then ResultSet",
     "Statement then ResultSet then Connection"
    ],
    "c": 1
   },
   {
    "id": 108,
    "a": 11,
    "q": "What is the full form of JDBC?",
    "o": [
     "Java Database Connectivity",
     "Java Data Code",
     "Java Data Communication",
     "Java Development Connectivity"
    ],
    "c": 0
   },
   {
    "id": 109,
    "a": 11,
    "q": "Fill in the missing code to establish a connection to a MySQL database.  \nimport jav",
    "o": [
     "sql.*; \n \npublic class JDBCExample { \n    public static void main(String[] args) { \n        try { \n            // Load JDBC Driver \n            Class.forName(\"com.mysql.cj.jdbc.Driver\"); \n \n            // Establish Connection \n            Connection connection = // INSERT CODE HERE;  \n \n            System.out.println(\"Connected to the database.\"); \n            connection.close(); \n        } catch (Exception e) { \n            e.printStackTrace(); \n        } \n    } \n} \nWhat should replace // INSERT CODE HERE ?",
     "DriverManager.getConnection(\"jdbc:mysql://localhost:3306/mydb\", \"user\", \"password\");",
     "Connection.get(\"jdbc:mysql://localhost:3306/mydb\", \"user\", \"password\");",
     "Driver.connect(\"jdbc:mysql://localhost:mydb\", \"user\", \"password\");"
    ],
    "c": 1
   },
   {
    "id": 110,
    "a": 11,
    "q": "What is the purpose of the DriverManager class in JDBC?",
    "o": [
     "To manage database connections.",
     "To execute SQL queries.",
     "To fetch data from a database.",
     "To represent a database recor"
    ],
    "c": 0
   },
   {
    "id": 111,
    "a": 12,
    "q": "Which JDBC object is used to iterate over records returned by a SELECT query?",
    "o": [
     "Statement",
     "Connection",
     "ResultSet",
     "DriverManager"
    ],
    "c": 2
   },
   {
    "id": 112,
    "a": 12,
    "q": "Which method is used to display a Swing JFrame  on the screen?",
    "o": [
     "display()",
     "setVisible(true)",
     "showFrame()",
     "open()"
    ],
    "c": 1
   },
   {
    "id": 113,
    "a": 12,
    "q": "What is the index of the first element in a Java array?",
    "o": [
     "1",
     "-1",
     "0",
     "Depends on array size"
    ],
    "c": 2
   },
   {
    "id": 114,
    "a": 12,
    "q": "Consider the following program:  (note space appears only one at a time)  \npublic class Question { \n    public static void main(String[] args) { \n \n        String str = \"",
    "o": [
     "38",
     "39",
     "40",
     "41"
    ],
    "c": 0
   },
   {
    "id": 115,
    "a": 12,
    "q": "Which keyword is used to handle exceptions in Java?",
    "o": [
     "error",
     "handle",
     "catch",
     "throwable"
    ],
    "c": 2
   },
   {
    "id": 116,
    "a": 12,
    "q": "What is the output of the following program?  \npublic class Test { \n    public static void aMethod() throws Exception { \n        try { \n            throw new Exception(); \n        } finally { \n            System.out.print(\"finally \"); \n        } \n    } \n \n    public static void main(String args[]) { \n        try { \n            aMethod(); \n        } catch (Exception e) { \n            System.out.print(\"exception \"); \n        } \n        System.out.print(\"finished \"); \n    } \n}",
    "o": [
     "ﬁnally",
     "exception ﬁnished",
     "ﬁnally exception ﬁnished",
     "Compilation fails"
    ],
    "c": 2
   },
   {
    "id": 117,
    "a": 12,
    "q": "What is the output of the following program?  \nclass Program { \n    public static void main(String[] args) { \n        int counter = 10; \n        do { \n            System.out.print(2 / counter); \n            counter--; \n        } while (counter > 2 ); \n    } \n}",
    "o": [
     "00000012",
     "00000000",
     "10011001",
     "12211221"
    ],
    "c": 1
   },
   {
    "id": 118,
    "a": 12,
    "q": "What should be the value of X and Y for the output of the below program to be 36?  \npublic class Question { \n    public static void main(String[] args) { \n        int X = 4; \n        int Y = 5; \n        int sum = 0; \n        for (int i = 0; i < X; i++) { \n            for (int j = i; j < Y; j++) { \n                sum = sum + j; \n            } \n        } \n        System.out.print(sum); \n    } \n}",
    "o": [
     "X = 6 and Y = 5",
     "X = 2 and Y = 7",
     "X = 1 and Y = 10",
     "X = 4 and Y = 5"
    ],
    "c": 3
   },
   {
    "id": 119,
    "a": 12,
    "q": "Which of the following options correctly initializes the elements of the numbers array with values 1, 2, \n3, 4, and 5?  \npublic class",
    "o": [
     "numbers = { 1, 2, 3, 4, 5};",
     "for (int i = 1; i < numbers .length ; i++) { \n    numbers[i] = i;  \n}",
     "numbers[] = { 1, 2, 3, 4, 5};",
     "numbers = new   int[]{1, 2, 3, 4, 5};"
    ],
    "c": 3
   },
   {
    "id": 120,
    "a": 12,
    "q": "Which of the following statements are correct and would NOT cause a compilation er ror?  \nI. float[] = new float(3);      \nII. float f1[] = new float[];    \nIII. float[] f2 = new float[3];   \nIV. float f3[] = new float[3];   \nV. float f4[]= { 1.0f, 2.0f, 2.0f };     \nVI. float f5[] = new float[] { 1.0f, 2.0f, 3.0f};",
    "o": [
     "iii, iv, v, vi",
     "i, ii, iii, iv",
     "ii, iii, v, vi",
     "i, ii, iv, vi"
    ],
    "c": 0
   }
  ],
  "explanations": {
   "1": "Creating a .class ﬁle from .java using the javac command is a compilation task, whereas execution of a \n.class ﬁle using java is the process of interpretation.",
   "2": "A .class ﬁle is a compiled version of the .java ﬁle in byte code. It is a kind of object code with the JVM \n(Java Virtual Machine) as the target machine.",
   "3": "Encapsulation, Inheritance, and Polymorphism are core paradigms. Dynamic memory allocation is a \nmemory allocation strategy and not a programming paradigm.",
   "4": "The Java development process involves writing code (Edit), converting it to bytecode (Compile), and then \nexecuting it on the JVM (Run).",
   "5": "The JDK includes a tool called ‘javac’ that compiles from Java source code to a target of Java \nbytecodes. The program ‘java’ is used to execute Java bytecode.",
   "6": "The public static void main(String[] args ) method is the entry point for the execution of a Java program.",
   "7": "Java is platiorm -independent, object -oriented, and secure. It does not support explicit pointers, as they \ncan lead to memory management issues and compromise security.",
   "8": "The Java Virtual Machine (JVM) enables platiorm independence by interpreting Java bytecode, allowing \nJava programs to run on any device with a compatible JVM.",
   "9": "Here, x *= (2 + 8) is equivalent to x = x * (2 + 8), which results in x = x * 10. Therefore, x = 5 * 10  => x = \n50.",
   "10": "This is the standard syntax for a Java program to print the string \"Hello, World!\" to the console.",
   "11": "The nextLine( ) method of the Scanner class reads a line of text from the console.  Refer to Lecture 10  for \nmore details.",
   "12": "If you perform any change for instance variable these changes won’t be reﬂected for the remaining \nobjects. Because for every object a separate copy of instance variable will be there. But if you do any \nchange to the static variable, that change will be re ﬂected for all objects because a static instance \nmaintains a single copy in memory.  \nPlease refer to chapter 3 of  book Joy With Java for a more detailed explaination.",
   "13": "Here, print( ) methods internally converts the data in its argument into a String object and then print the \ncomposition. Here, + is the concatenation of diﬀerent String representation.  \nPlease refer to chapter 3 of  book Joy With Java for a more detailed explaination.",
   "14": "Please refer to chapter 3 of  book Joy With Java for a more detailed explaination.  \nEncapsulation is one of the fundamental principles of object -oriented programming. It involves bundling \nthe data (variables) and the methods (functions) that operate on the data into a single unit, typically a \nclass. By making certain data private and prov iding public methods to access or modify it, encapsulation \nhelps hide implementation details from the outside world while exposing only the required functionality. This improves code modularity, security, and maintainability.",
   "15": "The constructor",
   "16": "The this keyword is used to refer to the current instance of a class. It is commonly used to resolve \nambiguity when instance variables and method parameters have the same name. For example:  \nclass Example { \n    int value; \n \n    Example( int value) { \n        this.value = value; // Resolves name collision by referring to \nthe instance variable \n    } \n} \nHere, this.value refers to the instance variable, while value refers to the parameter of the constructor. \nThis avoids confusion and ensures the proper assignment of values.  \nPlease refer book Joy with Java Chapter 3 for mored etailed explaination.",
   "17": "You are encouraged to review the role of program execution ﬂow in Java on your own.  \nNote: Please refer to the book Joy with Java Chapter 3 for more detailed explanation .",
   "18": "The print method is used to display output on the screen in Java.  \nIt is available through the System.out object.  \nYou should practice identifying commonly used output statements.  \nNote: Please refer to the book Joy with Java Chapter 3 for more detailed explanation .",
   "19": "In Java, every statement must end with a semicolon.  \nIt tells the compiler that the statement is complete.  \nRevise Java syntax rules carefully.  \nRefer to Joy with Java Chapter 2 for clariﬁcation.",
   "20": "The class keyword is used to deﬁne a class in Java.  \nJava keywords have predeﬁned meanings.  \nStudents should memorize basic Java keywords.  \n \nNote: Please refer to chapter 3 of  book Joy With Java for a more detailed explaination.",
   "21": "On object creation of a derived class, Java ensures that the base (parent) class constructor is executed \nfirst to initialize the parent's state before executing the derived class constructor.",
   "22": "In Java, `super( )` is used to invoke the constructor of the immediate parent class. It allows the subclass \nto initialize the parent class's state.",
   "23": "This is an example of method overriding. Since the object is instantiated as a `Car`, the overridden \n`move` method in the `Car` class is executed, even though the reference type is `Vehicle`.",
   "24": "A class marked as `final` cannot be extended, meaning it cannot be subclassed (it cannot have any child \nclasses).",
   "25": "The diamond problem arises in multiple inheritance when a class inherits from two classes that have a \ncommon ancestor, leading to ambiguity regarding which path to follow for inherited members. Java avoids this by not supporting multiple inheritance with c lasses.",
   "26": "The `private` access specifier is the most restrictive. Private members are not visible to subclasses and \ntherefore are not inherited.",
   "27": "Static methods are bound to the class rather than the instance (static binding). If a subclass defines a \nstatic method with the same signature, it \"hides\" the parent method rather than overriding it.",
   "28": "The `fun` method is a recursive function calculating the factorial of `n`. For input 5, it calculates 5 * 4 * 3 \n* 2 * 1 = 120.",
   "29": "Abstract classes cannot be instantiated. Any concrete subclass (non -abstract) must provide \nimplementations for all abstract methods defined in the parent abstract class.",
   "30": "The variable `a` is declared as `final` in the superclass. While it is inherited, its value cannot be modified \n(re-assigned) by the subclass, causing a compilation error.",
   "31": "The default access modiﬁer allows access within the same package only.  \nIt is applied when no access modiﬁer is written.  \nRevise package -level access rules carefully.",
   "32": "The parent class constructor is invoked ﬁrst automatically.  \nThis happens through an implicit call to super().  \nRevisit inheritance basics and constructor order.",
   "33": "1 Java  \n01 Java",
   "34": "The import statement allows access to classes from other packages.  \nIt improves code readability and reuse.  \nPractice basic import statements.",
   "35": "The `package` keyword is used in Java to deﬁne a package. For example, `package mypackage;` deﬁnes a \npackage named `mypackage`.",
   "36": "The syntax `import package.ClassName ;` imports a speciﬁc class from a package. For example, `import \njava.util.Scanner;` imports the `Scanner` class from the `java.util` package.",
   "37": "The output of both the program are  22. Therefore, option c  is correct and we can eliminate option d  that \nthe operators don ’t work. Further, the operators are doing exactly what they are supposed to do i.e. pre-\nincrement ﬁrst increases the values and post -increment increases the value during the next operation. \nThe print statement is the next operation; hence it received the post incremented value as well making \noption a and b invali",
   "38": "Through inheritance, one can access a protected  variable or method of a class even from outside the \npackage. Here, we accessed Teacher class of",
   "39": "If no access modiﬁer is speciﬁed for a class, it gets the default access level, making it accessible only \nwithin the same package.",
   "40": "The `private` modiﬁer provides the most restrictive access, allowing access only within the class where it \nis deﬁne",
   "41": "In Java, exceptions are handled using the try, catch , and finally  blocks. The try block contains code \nthat might throw an exception, the catch  block handles specific exceptions, and the finally  block \nexecutes regardless of whether an exception occurs.",
   "42": "The throws  keyword is used in a method signature to declare the exceptions that the method might \nthrow, alerting callers to handle or propagate these exceptions.",
   "43": "In Java, an interface can extend multiple interfaces. Interfaces can also contain  public , static , \nand final  variables, but they cannot be instantiated directly.",
   "44": "The Test  class implements the  Demo  interface and provides a definition for the  display  metho",
   "45": "The Cube  class overrides the calculate  method of the Square  class.  In the Cube  class ’s calculate  \nmethod, super.calculate(value)  is called, which executes the calculate  method of the Square",
   "46": "An ArithmeticException  is caught in the  catch  block, which prints “Error ”. The finally  block \nexecutes afterward, printing “Complete ”.",
   "47": "Variables in interfaces are  public , static , and  final  by default. Hence, the value of  x is accessible \nin the  display  metho",
   "48": "In Java, exceptions are handled using the try, catch, and finally blocks. The try block contains code that \nmight throw an exception, the catch block handles specific exceptions, and the finally block executes \nregardless of whether an exception occurs.",
   "49": "Any Java class that generates a checked exception and does not handle it internally must use the throws \nkeyword to alert other methods of its instability.",
   "50": "In Java, the finally is always executed after the try -catch block. This block can be used to do  the common \ncleanup work.",
   "51": "Calling start()  creates a new thread and internally invokes the run()  metho",
   "52": "The Runnable  interface contains a single method run()  and is used when a class needs to be executed \nby a threa",
   "53": "Once the run()  method finishes, the thread completes its lifecycle and enters the terminated state. A \nterminated thread cannot be restarte",
   "54": "The synchronized  keyword ensures that only one thread can access a method or block at a time, \npreventing race conditions.",
   "55": "Java thread priorities range from 1 ( MIN_PRIORITY ) to 10 (MAX_PRIORITY ). The default priority is 5 \n(NORM_PRIORITY ).",
   "56": "The sleep()  method pauses the currently executing thread for a specified number of milliseconds \nwithout releasing any locks.",
   "57": "sleep()  throws InterruptedException  if another thread interrupts the sleeping threa",
   "58": "BufferedReader  reads text efficiently using buffering and provides the readLine()  method for line -\nby-line input.",
   "59": "The readLine()  method reads an entire line of text and returns it as a String . It returns null  at end \nof file.",
   "60": "InputStream  is the abstract superclass for all byte -based input streams in Java, such as \nFileInputStream .",
   "61": "BufferedReader  to read the first line from the file",
   "62": "The exists()  method in the  File  class checks if a file or directory exists in the specified path.",
   "63": "i is assigned a value twice. Final variables can be assigned values only one. Following is the compiler \nerror “Main.java:5: error: variable i might already have been assigned ”.",
   "64": "Each time read() is called, it reads a single byte from the file and returns the byte as an integer value. \nread() returns -1 when the end of the file is encountere",
   "65": "Here the class instance variable name(num) is same as calc() method local variable name(num). So for \nreferencing class instance variable from calc( ) method, this keyword is use",
   "66": "Byte Streams : Handle raw binary data like images or files (InputStream, OutputStream).  \nCharacter Streams : Handle text data and support encoding like Unicode (Reader, Writer).  \nCharacter Streams are better for text processing, especially when handling international characters.  \nFor a detailed understanding of Java I/O streams, refer to the book Joy with Java .",
   "67": "Thread synchronization is used to control the access of multiple threads to shared resources, ensuring \ndata consistency and preventing race conditions. This is typically done using synchronize d methods or \nblocks.   \nFor more details on thread synchronization, refer to the book Joy with Java .",
   "68": "InputStream  is used to read data from any source in Jav",
   "69": "The File class is used to create directories and manipulate files.",
   "70": "Input streams are used to read data from a file or anoth er source.",
   "71": "All AWT components such as Frame , Button , and layout managers are defined in the java.awt  \npackage.",
   "72": "The Frame  class is used to create a top -level window with a title bar, border, and close button.",
   "73": "The setVisible(true)  method displays the frame on the screen. Without this call, the window is not \nshown.",
   "74": "An AWT Frame  uses BorderLayout  as its default layout manager.",
   "75": "The add()  method is used to place components such as buttons or labels into a container.",
   "76": "The Label  component is used to display read -only text in an AWT application.",
   "77": "FlowLayout  arranges components from left to right and moves to the next line when space runs out.",
   "78": "Calling setLayout(null)  disables layout management and allows manual positioning using \nsetBounds() .",
   "79": "Button click events in AWT are handled using the ActionListener  interface.",
   "80": "The setSize(width, height)  method defines the size of a frame in pixels.",
   "81": "FlowLayout arranges components left -to-right, wrapping to the next row as neede",
   "82": "A layout manager in Java is responsible for arranging and positioning GUI components within a container.",
   "83": "A message dialog with the text \"Welcome  to the course\" is displayed",
   "84": "Creates a JFrame with a JButton labeled \"Programming in Java\"",
   "85": "The add()  method is used to add components like buttons, text fields, or panels  to a JFrame.",
   "86": "The setLayout()  method is used to define the layout manager for a panel. FlowLayout  is the default \nlayout for JPanel.",
   "87": "The remove() method is used to remove a component from a container in AWT. It takes a Component \nobject as an argument and removes it from the container.",
   "88": "The mouseClicked()  method in the  MouseListener  interface is used to handle mouse click \nevents in Java Swing.",
   "89": "JComboBox  is a Swing component that provides a drop -down list from which users can select one \noption.",
   "90": "The setLayout() function is used to specify the layout of a container.",
   "91": "All core networking classes in Java, such as URL, Socket , InetAddress , and ServerSocket , are part \nof the java.net  package.",
   "92": "The InetAddress  class represents an Internet Protocol (IP) address and provides methods to obtain \nhost names and IP addresses.",
   "93": "The getHostAddress()  method returns the IP address in string format.",
   "94": "The Socket  class uses the TCP protocol, which is connection -oriented and reliable.",
   "95": "The ServerSocket  class waits for client requests and accepts incoming connections.",
   "96": "The toURL()  method converts a URI into a URL obj.",
   "97": "If a port number is not explicitly mentioned in the URL, getPort()  returns -1.",
   "98": "UDP is a connectionless protocol that sends data as packets without establishing a connection.",
   "99": "A client uses the connect()  method internally when creating a Socket  to establish a connection with \nthe server.",
   "100": "TCP operates at the transport layer and provides reliable, ordered, and error -checked data delivery.",
   "101": "To establish a connection to a database using JDBC, you use the DriverManager.getConnection() metho",
   "102": "The executeQuery() method is used to execute a simple SQL query that returns a single ResultSet object.",
   "103": "The DriverManager class ensures that the correct driver is used to access each data source. It manages a \nlist of database drivers and h andles establishing connections to the database.",
   "104": "The ResultSet interface in JDBC represents the result set returned by a query. It provides methods to \nnavigate through the result set, retrieve data, and get information about the columns in the result set. The ResultSet interface allows you to proc ess and extract data from a database query.",
   "105": "setAutoCommit(false) does not commit transaction automatically after each query. That saves a lot of \ntime of the execution and hence improves performance.",
   "106": "In the statement, joy is the username and java is the passwor",
   "107": "The correct order to close database resources is to ﬁrst close the ResultSet, then the Statement, and \nﬁnally the Connection. This ensures that all resources are properly released in the correct sequence.",
   "108": "JDBC stands for Java Database Connectivity, a Java API used to connect and interact with relational \ndatabases. It provides methods to query and update data in a database.",
   "109": "The DriverManager.getConnection  method establishes a connection to the specified database URL \nwith the provided username and passwor",
   "110": "The DriverManager class loads the JDBC drivers and establishes connections to databases.",
   "111": "A ResultSet  object stores and allows traversal of rows returned by a SELECT query.",
   "112": "A Swing frame becomes visible only after calling setVisible(true) .",
   "113": "Java arrays are zero -indexe",
   "114": "The provided Java program calculates and prints the length of the string str, which contains the text \n\"",
   "115": "The catch  block handles exceptions thrown in the try block.",
   "116": "The program is syntactically correct and here for two try blocks, there is one catch block.  \nHere's the step-by -step explanation:  \nI. The main  method calls aMethod() , which throws an Exception . \nII. Inside aMethod() , an Exception  is thrown in the try block.  \nIII. The finally  block is always executed, regardless of whether an exception is thrown or not. In \nthis case, it prints \"finally \".  \nIV. Since aMethod()  throws an Exception , control moves to the catch  block in main . \nV. The catch  block prints \"exception \".  \nVI. After the try-catch  block in main , \"finished \" is printe",
   "117": "The provided program uses a do -while loop to iterate from counter = 10 down to counter = 3. During \neach iteration, it prints the result of 2 / counter.  \n1. counter = 10: 2 / 10 results in 0 (integer division).  \n2. counter = 9: 2 / 9 results in 0.  \n3. counter = 8: 2 /  8 results in 0.  \n4. counter = 7: 2 / 7 results in 0.  \n5. counter = 6: 2 / 6 results in 0.  \n6. counter = 5: 2 / 5 results in 0.  \n7. counter = 4: 2 / 4 results in 0.  \n8. When counter = 3:  2 / 3 results in 0.  \nAfter counter becomes 2, the loop condition counter > 2 fails, and t he loop terminates.  \nTherefore, the output of the program is 00000000.",
   "118": "The following is the output of the program for diﬀerent values of X and Y:",
   "119": "numbers = new int[]{1, 2, 3, 4, 5};  i s the correct answer because it initializes the \nnumbers array with values 1, 2, 3, 4, and 5 using array initializer syntax.",
   "120": "Option iii, iv, v and vi are syntactically correct for declaration of an array."
  }
 },
 "old_mooc": {
  "id": "old_mooc",
  "title": "Old MOOC Questions for Practice",
  "subtitle": "135 Foundational NPTEL C & Java MCQs",
  "badge": "Old MOOC",
  "count": 135,
  "questions": [
   {
    "id": 1,
    "a": 1,
    "q": "What will be the output of the following code snippet?\n#include <stdio.h>\nvoid solve() {\nint a = 3;\nint res = a++ + ++a + a++ + ++a;\nprintf(\"%d\", res);\n}\nint main() {\nsolve();\nreturn 0;\n}",
    "o": [
     "12",
     "24",
     "20",
     "18"
    ],
    "c": 2
   },
   {
    "id": 2,
    "a": 1,
    "q": "What will be the value of x  in the following code snippet?\n#include <stdio.h>\nvoid solve() {\nint x = printf(\"Hello\");\nprintf(\" %d\", x);\n}\nint main() {\nsolve();\nreturn 0;\n}",
    "o": [
     "10",
     "5",
     "1",
     "0"
    ],
    "c": 1
   },
   {
    "id": 3,
    "a": 1,
    "q": "Pick the best option  for the following statement:\nint (*p)[5];",
    "o": [
     "The statement will create an array p of pointers.",
     "he statement has an error.",
     "The statement will create an array p of integers.",
     "None of the above"
    ],
    "c": 0
   },
   {
    "id": 4,
    "a": 1,
    "q": "The size of a union is determined by:",
    "o": [
     "The sum of all the members ’ sizes",
     "The biggest member of the union",
     "The last member of the union",
     "The ﬁrst member of the union"
    ],
    "c": 1
   },
   {
    "id": 5,
    "a": 1,
    "q": "What will be the output  of the following code snippet ?\n#include <stdio.h>\nint main()\n{\nint *ptr, a = 10;\nptr = &a;\n*ptr += 1;\nprintf(\"%d,%d\", *ptr, a);\n}",
    "o": [
     "10, 10",
     "10, 11",
     "11, 10",
     "11, 11"
    ],
    "c": 3
   },
   {
    "id": 6,
    "a": 1,
    "q": "What will be the output of the following code snippet?\n#include <stdio.h>\n// Assume base address of \"Test_Quiz\" to be 1000\nint main()\n{\nprintf(5 + \"Test_Quiz\");\nreturn 0;\n}",
    "o": [
     "Test",
     "Quiz",
     "1005",
     "Compile -time error"
    ],
    "c": 1
   },
   {
    "id": 7,
    "a": 1,
    "q": "Which of the following is not a storage class speciﬁer in C?",
    "o": [
     "auto",
     "register",
     "static",
     "volatile"
    ],
    "c": 3
   },
   {
    "id": 8,
    "a": 1,
    "q": "In C, static storage class cannot be used with:",
    "o": [
     "Global variable",
     "Function parameter",
     "Function name",
     "Local variable"
    ],
    "c": 1
   },
   {
    "id": 9,
    "a": 1,
    "q": "What will be the o utput of the following code snippet?\n#include<stdio.h>\nint main()\n{\nchar str[20] = \"Test_Quiz\";\nprintf (\"%d\", sizeof(str));\nreturn 0;\n}",
    "o": [
     "9",
     "10",
     "Garbage value",
     "20"
    ],
    "c": 3
   },
   {
    "id": 10,
    "a": 1,
    "q": "Point out the error, if any, in the for loop:\n#include<stdio.h>\nint main()\n{\nint i = 1;\nfor (;;)\n{\nprintf(\"%d\", i++);\nif (i > 10)\nbreak;\n}\n}",
    "o": [
     "ERROR: The condition part in the for loop is required.",
     "ERROR: The two semicolons should be dropped.",
     "ERROR: The for loop should be replaced by a while loop.",
     "No error."
    ],
    "c": 3
   },
   {
    "id": 11,
    "a": 1,
    "q": "What is the following set of statements equivalent to?\nif(x==1)\n{\nx=0;\n}\nelse if(x==0)\n{\nx=1;\n}",
    "o": [
     "x = 1 + x;",
     "x = 1 - x;",
     "x = x - 1;",
     "x = 1 % x;"
    ],
    "c": 1
   },
   {
    "id": 12,
    "a": 2,
    "q": "What is deﬁned by the statements given below ?\nstruct node\n{\nint i;\nfloat j;\n};\nstruct node *s[10];",
    "o": [
     "An array, each element of which is pointer to a structure of type node.",
     "A structure of 2 ﬁelds, each ﬁeld being a pointer to an array of 10 elements.",
     "A structure of 3 ﬁelds: a n integer, a ﬂoat, and an array of 10 elements.",
     "An array, each element of which is a structure of type node."
    ],
    "c": 0
   },
   {
    "id": 13,
    "a": 2,
    "q": "What needs to be called in order to exchange the values of two variables x and y  in the following\ncode ?\nvoid swap (int a, int b)\n{\nint temp;\ntemp = a;\na = b;\nb = temp;\n}",
    "o": [
     "call swap(x, y)",
     "call swap(&x, &y)",
     "call swap(*x, *y)",
     "swap(x, y) cannot be used to swap the variables"
    ],
    "c": 3
   },
   {
    "id": 14,
    "a": 2,
    "q": "What will be the output of the program if the array begins 2200 in memory?\n#include<stdio.h>\nint main()\n{\nint arr[]={12,13, 14, 1, 6};\nprintf(\"%u, %u, %u\", arr, &arr[0], &arr);\nreturn 0;\n}",
    "o": [
     "2300,  2200,  2500",
     "2200, 2200, 2200",
     "2300,  2400,  2500",
     "2200,  2200,  2300"
    ],
    "c": 1
   },
   {
    "id": 15,
    "a": 2,
    "q": "In C/ C++, if you pass an array as an argument to a function, what actually gets passed?",
    "o": [
     "Value of elements in array",
     "First element of the array",
     "Base address of the  array",
     "Address of the last element of array"
    ],
    "c": 2
   },
   {
    "id": 16,
    "a": 2,
    "q": "What is the primary focus of Java programming?",
    "o": [
     "Low-level optimizations",
     "Hardware -speciﬁc operations",
     "Platiorm independence",
     "Assembly language programming"
    ],
    "c": 2
   },
   {
    "id": 17,
    "a": 2,
    "q": "Which of the following programming principles is a key aspect of Java?",
    "o": [
     "Code obfuscation",
     "Platiorm dependence",
     "Object -oriented programming",
     "Global variables"
    ],
    "c": 2
   },
   {
    "id": 18,
    "a": 2,
    "q": "What is the last step in the Java programming process?",
    "o": [
     "Java Program Execution",
     "Java  Program Editing",
     "Java Program Compilation",
     "C/C++ versus Java"
    ],
    "c": 0
   },
   {
    "id": 19,
    "a": 2,
    "q": "Which of the following is NOT a Java prog ramming tool?",
    "o": [
     "Eclipse",
     "NetBeans",
     "IntelliJ IDEA",
     "GCC"
    ],
    "c": 3
   },
   {
    "id": 20,
    "a": 2,
    "q": "What does the term \"Write Once, Run Anywhere\" (WORA) imply in Java?",
    "o": [
     "Code reusability",
     "Platiorm independence",
     "Cross -compilation",
     "Dynamic typing"
    ],
    "c": 1
   },
   {
    "id": 21,
    "a": 2,
    "q": "In Java, what is used to store multiple values of the same type?",
    "o": [
     "Structures",
     "Pointers",
     "Arrays",
     "Lists"
    ],
    "c": 2
   },
   {
    "id": 22,
    "a": 2,
    "q": "Which of the following is a  valid  identifier in Java?",
    "o": [
     "123identiﬁer",
     "_identiﬁer",
     "#identiﬁer",
     "identiﬁer -123"
    ],
    "c": 1
   },
   {
    "id": 23,
    "a": 3,
    "q": "What is the purpose of Java Language Subset?",
    "o": [
     "To limit the capabilities of Java",
     "To make Java code compatible with other languages",
     "To deﬁne a smaller set of Java features for speciﬁc purposes",
     "To enhance the performance of Java programs"
    ],
    "c": 2
   },
   {
    "id": 24,
    "a": 3,
    "q": "What is the primary purpose of the Java Virtual Machine (JVM) in the Java programming language?",
    "o": [
     "Code optimization",
     "Platiorm independence",
     "Memory management",
     "Hardware -speciﬁc operations"
    ],
    "c": 1
   },
   {
    "id": 25,
    "a": 3,
    "q": "What is emphasized during the Java Program Editing phase?",
    "o": [
     "Writing platiorm -speciﬁc code",
     "Debugging the program",
     "Compiling the program",
     "Writing and modifying the source code"
    ],
    "c": 3
   },
   {
    "id": 26,
    "a": 3,
    "q": "In Java programming an object can take many forms. This feature called ______.",
    "o": [
     "Abstraction",
     "Polymorphism",
     "Encapsulation",
     "Inheritance"
    ],
    "c": 1
   },
   {
    "id": 27,
    "a": 3,
    "q": "Which of the following is a valid declaration of an object of class, say",
    "o": [
     "NPTEL obj = new NPTEL ();",
     "NPTEL obj = new NPTEL;",
     "obj = new NPTEL ();",
     "new NPTEL obj;"
    ],
    "c": 0
   },
   {
    "id": 28,
    "a": 3,
    "q": "A default constructor :",
    "o": [
     "has no arguments",
     "has no return type",
     "has one argument but no return type",
     "has two arguments"
    ],
    "c": 0
   },
   {
    "id": 29,
    "a": 3,
    "q": "A top -level class may have which one of the fo llowing access modifiers?",
    "o": [
     "package",
     "private",
     "protected",
     "public"
    ],
    "c": 3
   },
   {
    "id": 30,
    "a": 3,
    "q": "Integer in Java is a\\an _______.",
    "o": [
     "Adapter class",
     "Inner class",
     "Not a class",
     "Wrapper class"
    ],
    "c": 3
   },
   {
    "id": 31,
    "a": 3,
    "q": "What is true about the new operator?",
    "o": [
     "returns a pointer to a variable",
     "creates a variable called new",
     "obtains memory for a new variable",
     "tells how much memory is available"
    ],
    "c": 2
   },
   {
    "id": 32,
    "a": 3,
    "q": "Which one i s not supported by OOP?",
    "o": [
     "Abstraction",
     "Polymorphism",
     "Encapsulation",
     "Global variables"
    ],
    "c": 3
   },
   {
    "id": 33,
    "a": 3,
    "q": "Which of the following modifiers can be used to disallow a m ethod from being overridden?",
    "o": [
     "ﬁnal",
     "transient",
     "volatile",
     "static"
    ],
    "c": 0
   },
   {
    "id": 34,
    "a": 4,
    "q": "Consider the following code segment  \n \n1  class Question{  \n2    public static void main(String args){ \n3         System.out.print(“Welcome to",
    "o": [
     "1",
     "2",
     "3",
     "4 and 5"
    ],
    "c": 1
   },
   {
    "id": 35,
    "a": 4,
    "q": "Which of the following is TRUE about print() and println() methods?",
    "o": [
     "print() prints i n a single line only and multiple lines cannot be printed in any way.",
     "println()prints and then appends a line break.",
     "println() prints in a single line only and multiple lines cannot be printe",
     "print() prints and then appends a line break."
    ],
    "c": 1
   },
   {
    "id": 36,
    "a": 4,
    "q": "Which of the following statement is true regarding the order of execution of constructors in an \ninheritance hierarchy?",
    "o": [
     "Base class constructor will be called followed by the derived class constructor.",
     "Derived class constructor will be called followed by the base class constructor.",
     "Only Base class constructor will be calle",
     "Only derived class constructor will be calle"
    ],
    "c": 0
   },
   {
    "id": 37,
    "a": 4,
    "q": "The super() method is used to :",
    "o": [
     "Call constructor of friend class",
     "Is a declared method",
     "Call constructor of the parent class",
     "Call constructor"
    ],
    "c": 2
   },
   {
    "id": 38,
    "a": 4,
    "q": "What will be the output of the following Java program?  \nclass A { \n \n  int i; \n \n  void display() { \n    System.out.println(i); \n  } \n} \n \nclass B extends A { \n \n  int j; \n \n  void display() { \n    System.out.println(j); \n  } \n} \n \nclass inheritance_demo { \n \n  public static void main(String args[]) { \n    B obj = new B(); \n    obj.i = 1; \n    obj.j = 2; \n    obj.display(); \n  } \n}",
    "o": [
     "0",
     "1",
     "2",
     "Compilation Error"
    ],
    "c": 2
   },
   {
    "id": 39,
    "a": 4,
    "q": "In Java, is it possible to override a static method?",
    "o": [
     "Yes, we can override a static method just like we do with instance methods.",
     "No, static methods cannot be overridden because they belong to the class, not the object.",
     "It depends on whether the static method is declared as ﬁnal or not.",
     "It depends on the access modiﬁer of the static metho"
    ],
    "c": 1
   },
   {
    "id": 40,
    "a": 4,
    "q": "What is the output of the following Java program?  \npublic class Vehicle { \n    public void move() { \n        System.out.println( \"The vehicle moves\"); \n    } \n} \n \npublic class Car extends Vehicle { \n    public void move() { \n        System.out.println( \"The car moves\"); \n    } \n} \n \npublic class Main { \n    public static void main(String[] args) { \n        Vehicle vehicle = new Car(); \n        vehicle. move(); \n    } \n}",
    "o": [
     "\"The vehicle moves\"",
     "\"The car moves\"",
     "The code does not compile",
     "None of the above"
    ],
    "c": 1
   },
   {
    "id": 41,
    "a": 4,
    "q": "What is the output of the below Java program with inheritance?  \nclass Sweet { \n \n  void price() { \n    System.out.print(\"Sweet=$10 \"); \n  } \n} \n \nclass Sugar extends Sweet { \n \n  void price() { \n    super.price(); \n    System.out.print(\"Sugar=$20\"); \n  } \n} \n \npublic class JavaInheritance1 { \n \n  public static void main(String[] args) { \n    Sugar su = new Sugar(); \n    su.price(); \n  } \n}",
    "o": [
     "Sweet=$10 Sugar=$20",
     "Sweet=$10 Sugar=$10",
     "Sweet=$20 Sugar=$20",
     "Compiler error"
    ],
    "c": 0
   },
   {
    "id": 42,
    "a": 4,
    "q": "What is the purpose of method hiding in Java inheritance?",
    "o": [
     "To prevent a subclass from inheriting methods",
     "To override superclass methods with new implementations",
     "To expose private methods of the superclass",
     "To deﬁne methods with the same name in both the superclass and subclass"
    ],
    "c": 3
   },
   {
    "id": 43,
    "a": 4,
    "q": "What is the output of the following Java program?  \nclass Parent { \n \n  String name = \"parent\";  \n \n  String message() { \n    return \"from parent\";  \n  } \n} \n \nclass Child extends Parent { \n \n  String name = \"child\";  \n \n  String message() { \n    return \"from child\";  \n  } \n} \n \npublic class Main { \n \n  public static void main(String[] args) { \n    Parent p = new Child(); \n    System.out.println( p.name + \" \" + p.message()); \n  } \n}",
    "o": [
     "\"parent from parent\"",
     "\"child from child\"",
     "\"parent from child\"",
     "\"child from parent\""
    ],
    "c": 2
   },
   {
    "id": 44,
    "a": 4,
    "q": "Can a class be marked as both “final” and “abstract” in Java?",
    "o": [
     "Yes, but only if it has no methods.",
     "Yes, a class can be marked as both “ﬁnal” and “abstract.”",
     "No, a class cannot be both “ﬁnal” and “abstract.”",
     "Yes, but only if it is marked as “protected.”"
    ],
    "c": 2
   },
   {
    "id": 45,
    "a": 5,
    "q": "In Java, is it possible to override a static method?",
    "o": [
     "Yes, we can override a static method just like we do with instance methods.",
     "No, static methods cannot be overridden because they belong to the class, not the object.",
     "It depends on whether the static method is declared as ﬁnal or not.",
     "It depends on the access modiﬁer of the static metho"
    ],
    "c": 1
   },
   {
    "id": 46,
    "a": 5,
    "q": "Which is the keyword used to specify the default  access modifier in java?",
    "o": [
     "default",
     "DEFAULT",
     "package",
     "“There is no keyword”"
    ],
    "c": 3
   },
   {
    "id": 47,
    "a": 5,
    "q": "What is the output of the Java program with access modifiers?  \n \npackage",
    "o": [
     "week); \n  } \n}",
     "Runtime Error",
     "null",
     "Compiler Error"
    ],
    "c": 3
   },
   {
    "id": 48,
    "a": 5,
    "q": "What is the output of the below Java Code Snippet with access modifiers?  \npackage",
    "o": [
     "Weeks = 0",
     "Weeks = 12",
     "No Error, blank output",
     "Compiler error"
    ],
    "c": 1
   },
   {
    "id": 49,
    "a": 5,
    "q": "Which of the following is the correct representation of access modifiers in order of increasing \nvisibility?",
    "o": [
     "private < default < protected < public",
     "private < protected < default < public",
     "public < protected < default < private",
     "protected < default < private < public"
    ],
    "c": 0
   },
   {
    "id": 50,
    "a": 5,
    "q": "Which of the following package stores all the standard java classes?",
    "o": [
     "java.util",
     "java.lang",
     "java.java",
     "java.packages"
    ],
    "c": 1
   },
   {
    "id": 51,
    "a": 5,
    "q": "Which of the following is/are true about packages in Java?  \n1. Every class is part of some package.  \n2. All classes in a file are part of the same package.  \n3. If no package is specified, the classes in the file go into a special unnamed package . \n4. If no package is specified, a new package is created with folder name of class  and the class is \nput in this package.",
    "o": [
     "Only 1, 2 and 3",
     "Only 1, 2 and 4",
     "Only 4",
     "Only 1 and 3"
    ],
    "c": 0
   },
   {
    "id": 52,
    "a": 5,
    "q": "What is the output of following Java program ? \nimport static jav",
    "o": [
     "lang.System.* ; \n \nclass ProgrammingInJava { \n \n  public static void main(String args[]) { \n    out.println( \"Welcome!\"); \n  } \n}",
     "Runtime Error",
     "Welcome!",
     "None of the above"
    ],
    "c": 2
   },
   {
    "id": 53,
    "a": 5,
    "q": "Which of these access specifiers can be used for an interface?",
    "o": [
     "Public",
     "Protected",
     "private",
     "All of the mentioned"
    ],
    "c": 0
   },
   {
    "id": 54,
    "a": 5,
    "q": "Which of the following is the correct way of implementing an interface",
    "o": [
     "class Java extends",
     "class Java implements",
     "class Java imports",
     "none of the mentioned"
    ],
    "c": 1
   },
   {
    "id": 55,
    "a": 5,
    "q": "What will be the output of the following Java program?  \ninterface calculate { \n  void cal(int item); \n} \n \nclass display implements calculate { \n  int x; \n \n  public void cal(int item) { \n    x = item * item; \n  } \n} \n \nclass interfaces { \n  public static void main(String args[]) \n        { \n            display arr = new display();  \n            arr.x = 0;       \n            arr.cal(2); \n            System.out.print(arr.x); \n        } \n}",
    "o": [
     "0",
     "2",
     "4",
     "Compiler Error"
    ],
    "c": 2
   },
   {
    "id": 56,
    "a": 6,
    "q": "Which of the following is an incorrect statement about interfaces?",
    "o": [
     "Interfaces speciﬁes what class must do but not how it does.",
     "Interfaces are speciﬁed public if they are to be accessed by any code in the program.",
     "All variables in interface are implicitly ﬁnal and stati",
     "All variables are static and methods are public if interface is deﬁned publ i"
    ],
    "c": 3
   },
   {
    "id": 57,
    "a": 6,
    "q": "How do you access a static method of an interface?",
    "o": [
     "Using the interface name",
     "Using the method name directly",
     "Through an object of the interface",
     "Through an implementation class"
    ],
    "c": 0
   },
   {
    "id": 58,
    "a": 6,
    "q": "What is the output of the below Java program with an Interface?  \ninterface Car { \n  int basePrice = 1000; \n} \n \npublic class InterfaceTest2 implements Car { \n  void changePrice() { \n    basePrice = 2000;  \n    System.out.print(basePrice); \n  } \n \n  public static void main(String[] args) { \n    new InterfaceTest2().changePrice(); \n  } \n}",
    "o": [
     "1000",
     "2000",
     "Compiler error",
     "None of the above"
    ],
    "c": 2
   },
   {
    "id": 59,
    "a": 6,
    "q": "What happens when we access the same variable defined in two interfaces implemented by the same \nclass?",
    "o": [
     "Compilation fai lure",
     "Runtime Exception",
     "The JVM is not able to identify the correct variable",
     "The interfaceName.  variableName needs to be deﬁned"
    ],
    "c": 3
   },
   {
    "id": 60,
    "a": 6,
    "q": "Predict the output of following Java program  \nclass Test extends Exception {} \n \nclass Main { \n \n  public static void main(String args[]) { \n    try { \n      throw new Test(); \n    } catch (Test t) { \n      System.out.println( \"Got the Test Exception\"); \n    } finally { \n      System.out.println( \"Inside finally block \"); \n    } \n  } \n}",
    "o": [
     "Got the Test Exception  \n       Inside ﬁnally block",
     "Got the Test Exception",
     "Inside ﬁnally block",
     "Compiler Error"
    ],
    "c": 0
   },
   {
    "id": 61,
    "a": 6,
    "q": "What happens if an exception is not caught in the catch block?",
    "o": [
     "The ﬁnally block handles it",
     "The exception is ignored",
     "The exception is thrown to the caller method",
     "The program terminates immediately"
    ],
    "c": 2
   },
   {
    "id": 62,
    "a": 6,
    "q": "What will be the output of the following Java program?  \nclass exception_handling { \n \n  public static void main(String args[]) { \n    try { \n      System.out.print(\"Hello\" + \" \" + 1 / 0); \n    } catch (ArithmeticException e) { \n      System.out.print(\"World\"); \n    } \n  } \n}",
    "o": [
     "Hello",
     "World",
     "HelloWorld",
     "Hello World"
    ],
    "c": 1
   },
   {
    "id": 63,
    "a": 6,
    "q": "What is the output of the below Java code with Exceptions?  \npublic class ExceptionTest2 { \n \n  public static void main(String[] args) { \n    try { \n      int ary[] = { 10, 20, 30 }; \n      int tempt = ary[4]; \n    } catch (ArrayIndexOutOfBoundsException e1) { \n      System.out.println( e1.getMessage()); \n    } catch (Exception e2) { \n      System.out.println( \"Some exception\"); \n    } \n  } \n}",
    "o": [
     "Index 4 out of bounds for length 3",
     "Index 4 out of bounds for length 3 \n       Some exception",
     "Some exception",
     "No exception occurs"
    ],
    "c": 0
   },
   {
    "id": 64,
    "a": 6,
    "q": "What is the output of the Java code with FINALLY block and RETURN statement?  \npublic class ExceptionTest6 { \n \n  static void show() { \n    try { \n      System.out.println( \"inside TRY\"); \n      return; \n    } finally { \n      System.out.println( \"inside FINALLY\"); \n    } \n  } \n \n  public static void main(String[] args) { \n    show(); \n  } \n}",
    "o": [
     "inside TRY",
     "inside TRY  \n       inside FINALLY",
     "inside FINALLY",
     "Compiler error"
    ],
    "c": 1
   },
   {
    "id": 65,
    "a": 6,
    "q": "What is the purpose of the finally block in Java exception handling?",
    "o": [
     "To handle an exception",
     "To catch an exception",
     "To clean up resources atier a try block",
     "None of the above"
    ],
    "c": 2
   },
   {
    "id": 66,
    "a": 6,
    "q": "What is the output of the following program ? \npublic class",
    "o": [
     "“Programming In Java ”",
     "Run time error",
     "Compile time error",
     "ArithmeticException"
    ],
    "c": 2
   },
   {
    "id": 67,
    "a": 7,
    "q": "What is the output of the following program?  \npublic class",
    "o": [
     "1 3",
     "1 2 3 4",
     "Runtime error",
     "1 2"
    ],
    "c": 0
   },
   {
    "id": 68,
    "a": 7,
    "q": "For the program given below, what will be the output after its execution?  \npublic class",
    "o": [
     "0",
     "true",
     "1",
     "currentThread(); \n    System.out.println( thread.activeCount()); \n  } \n}"
    ],
    "c": 2
   },
   {
    "id": 69,
    "a": 7,
    "q": "Which of the following is a correct constructor for a thread object?",
    "o": [
     "Thread(Runnable a, String str);",
     "Thread(Runnable a, int priority);",
     "Thread(Runnable a, ThreadGroup t);",
     "Thread(int priority);"
    ],
    "c": 0
   },
   {
    "id": 70,
    "a": 7,
    "q": "What is the output of the following program?  \nclass",
    "o": [
     "Compiler Error",
     "“Running”",
     "Runtime Exception",
     "start(); \n  } \n}"
    ],
    "c": 1
   },
   {
    "id": 71,
    "a": 7,
    "q": "How many threads does the following program run on?  \npublic class ThreadExtended extends Thread { \n \n  public void run() { \n    System.out.println( \"\\nThread is running now\\ n\"); \n  } \n \n  public static void main(String[] args) { \n    ThreadExtended threadE = new ThreadExtended(); \n \n    threadE. start(); \n  } \n}",
    "o": [
     "0",
     "1",
     "2",
     "3"
    ],
    "c": 2
   },
   {
    "id": 72,
    "a": 7,
    "q": "In the following java program, what is the NAME of the thread?  \nclass",
    "o": [
     "thread",
     "main",
     "system",
     "currentThread(); \n      System.out.println(t); \n    } \n}"
    ],
    "c": 1
   },
   {
    "id": 73,
    "a": 7,
    "q": "Which of the following line (s) of code is suitable to START  a thread at #1 ?\nclass",
    "o": [
     "_______________________ // #1",
     "}",
     "public void run() {}",
     "}"
    ],
    "c": 2
   },
   {
    "id": 74,
    "a": 7,
    "q": "What is the name of the priority of this Thread in this program?  \nclass",
    "o": [
     "1",
     "4",
     "0",
     "currentThread(); \n    System.out.println( t.getPriority()); \n  } \n}"
    ],
    "c": 3
   },
   {
    "id": 75,
    "a": 7,
    "q": "What does I/O stand for in Java?",
    "o": [
     "Input/Output",
     "Inheritance/Overriding",
     "Integer/Object",
     "Iteration/Observation"
    ],
    "c": 0
   },
   {
    "id": 76,
    "a": 7,
    "q": "Which stream does Java application uses to read data from a source, it may be a file, an array, \nperipheral device or socket?",
    "o": [
     "InputStream",
     "OutputStream",
     "Input/OutputStream",
     "None of the above"
    ],
    "c": 0
   },
   {
    "id": 77,
    "a": 7,
    "q": "What is the primary purpose of input streams in Java?",
    "o": [
     "To write data to a ﬁle.",
     "To read data from a ﬁle.",
     "To append data to a ﬁle.",
     "To create directories."
    ],
    "c": 1
   },
   {
    "id": 78,
    "a": 8,
    "q": "Which class in Java is used to create a new directory?",
    "o": [
     "FileReader",
     "FileWriter",
     "File",
     "Directory"
    ],
    "c": 2
   },
   {
    "id": 79,
    "a": 8,
    "q": "Which class in Java is used to read data line by line from a file?",
    "o": [
     "BuﬀeredReader",
     "FileInputStream",
     "FileWriter",
     "OutputStream"
    ],
    "c": 0
   },
   {
    "id": 80,
    "a": 8,
    "q": "What does the following code do?  \nFileInputStream fis = new FileInputStream( \"test.dat\");",
    "o": [
     "It creates a new ﬁle named test.dat if it does not exist and opens the ﬁle so you can write to \nit, if write permission is available.",
     "It thows an error if the ﬁle named test.dat does not exist and opens the ﬁle, if it exists , so you \ncan read from it and write into it, if write permission is available.",
     "It creates a new ﬁle named test.dat regardless of whether it exists or not and opens the ﬁle so you can write to it, if write permission is available.",
     "It creates a new ﬁle na med test.dat regardless of whether it exists or not and opens the ﬁle so \nyou can read from it and write to it, if write permission is available."
    ],
    "c": 1
   },
   {
    "id": 81,
    "a": 8,
    "q": "What is the output of this program?  (Assume 'inputoutput.java' file exists in the current directory)  \nimport jav",
    "o": [
     "io. *; \n \nclass filesinputoutput { \n    public static void main(String args[]) throws FileNotFoundException , \nIOException  { \n        InputStream  obj = new FileInputStream (\"inputoutput.java\" ); \n        System.out.print(obj.available ()); \n        obj.close(); \n    } \n}",
     "false",
     "prints number of bytes in ﬁle",
     "prints number of characters in the ﬁle"
    ],
    "c": 2
   },
   {
    "id": 82,
    "a": 8,
    "q": "What will be the output of the following Java program?  \nimport jav",
    "o": [
     "io. *; \n \nclass Chararrayinput { \n \n  public static void main(String[] args) {  \n    String obj = \"abcdefgh\" ; \n    int length = obj.length(); \n    char c[] = new char[length];  \n    obj.getChars (0, length, c, 0); \n    CharArrayReader  input1 = new CharArrayReader (c); \n    CharArrayReader  input2 = new CharArrayReader (c, 1, 4); \n    int i, j; \n    try { \n      while ((i = input1.read()) == (j = input2.read())) { \n        System.out.print((char) i); \n      } \n    } catch (IOException  e) { \n      e.printStackTrace (); \n    } \n  } \n}",
     "abcd",
     "abcde",
     "none of the mentioned"
    ],
    "c": 3
   },
   {
    "id": 83,
    "a": 8,
    "q": "What is the output of  the following Java program?  \nclass Main { \n \n  public static void main(String args[]) {  \n    final int i; \n    i = 20; \n    i = 30; \n    System.out.println(i); \n  } \n}",
    "o": [
     "30",
     "Compiler Error",
     "Garbage value",
     "0"
    ],
    "c": 1
   },
   {
    "id": 84,
    "a": 8,
    "q": "In order to restrict a variable of a class from inheriting to subclass, how variable should be declared?",
    "o": [
     "Protected",
     "Private",
     "Public",
     "Static"
    ],
    "c": 1
   },
   {
    "id": 85,
    "a": 8,
    "q": "A __ ______ is a type of object that organizes components in a container.",
    "o": [
     "Event adapter",
     "Event Handler",
     "Layout manager",
     "Grid Manager"
    ],
    "c": 2
   },
   {
    "id": 86,
    "a": 8,
    "q": "What does AWT stand for in Java?",
    "o": [
     "Applet Windowing Toolkit",
     "Abstract Window  Toolkit",
     "Absolute Windowing Toolkit",
     "None of the above"
    ],
    "c": 1
   },
   {
    "id": 87,
    "a": 8,
    "q": "When we invoke repaint() for a jav",
    "o": [
     "awt.Component object, the AWT invokes which of the \nfollowing method ?",
     "show( )",
     "update( )",
     "none of the mentioned"
    ],
    "c": 2
   },
   {
    "id": 88,
    "a": 8,
    "q": "Which is/are used to create a Frame?  \n1.  By creating the object of Frame class (association)  \n2.  By extending Frame class (inheritance)",
    "o": [
     "Only 1",
     "Only 2",
     "Both",
     "Non e"
    ],
    "c": 2
   },
   {
    "id": 89,
    "a": 9,
    "q": "Which AWT concept allows you to handle events such as button clicks or mouse movements?",
    "o": [
     "Event Handling",
     "Component Interaction",
     "Process  Management",
     "GUI Processing"
    ],
    "c": 0
   },
   {
    "id": 90,
    "a": 9,
    "q": "Which of the following methods can be used to change the size of a jav",
    "o": [
     "awt.Component object?  \n1.  dimension()  \n2.  setSize()  \n3.  area()  \n4.  size()  \n5.  resetSize ()",
     "4 & 5",
     "1, 2 & 5",
     "only 2"
    ],
    "c": 3
   },
   {
    "id": 91,
    "a": 9,
    "q": "Which of the following is TRUE regarding check box and radio button?",
    "o": [
     "Check box is used for single selection item whereas radio buton is used for multiple selection.",
     "Check box is used for multiple selection items whereas radio buton is used for single selection.",
     "Both are used for multiple as well as singl e item selection.",
     "Checkbox is the same as radio butons."
    ],
    "c": 1
   },
   {
    "id": 92,
    "a": 9,
    "q": "How is AWT different from Swing in Java?",
    "o": [
     "AWT is for web applications, Swing is for desktop applications",
     "AWT uses lightweight components, Swing uses heavyweight components",
     "AWT is newer than Swing",
     "AWT and Swing a re synonyms, used interchangeably"
    ],
    "c": 1
   },
   {
    "id": 93,
    "a": 9,
    "q": "What is  the primary purpose of AWT components in GUI programming?",
    "o": [
     "To perform mathematical calculations",
     "To interact with databases",
     "To create graphical user interfaces",
     "To handle network communications"
    ],
    "c": 2
   },
   {
    "id": 94,
    "a": 9,
    "q": "What will be the output of the Java code  given below ? \nimport jav",
    "o": [
     "awt.* ; \nimport java.awt.event.* ; \n \npublic class ButtonExample extends Frame { \n    public static void main(String[] args) { \n        ButtonExample frame = new ButtonExample(); \n        Button b = new Button(\"",
     "Compilation error",
     "An empty frame with no buton",
     "A frame with a buton, but not at the speciﬁed coordinates"
    ],
    "c": 0
   },
   {
    "id": 95,
    "a": 9,
    "q": "What is the layout manager used in the Ja va code  given below ? \nimport jav",
    "o": [
     "awt.* ; \nimport java.awt.event.* ; \n \npublic class GridLayoutExample extends Frame { \n    public static void main(String[] args) { \n        GridLayoutExample frame = new GridLayoutExample(); \n        Button b1 = new Button(\"Button 1\"); \n        Button b2 = new Button(\"Button 2\"); \n        Button b3 = new Button(\"Button 3\"); \n        frame.add(b1); \n        frame.add(b2); \n        frame.add(b3); \n        frame.setLayout( new GridLayout( 2, 2)); \n        frame.setSize( 300, 200); \n        frame.setVisible( true); \n    } \n}",
     "Flow Layout",
     "Grid Layout",
     "Card Layout"
    ],
    "c": 2
   },
   {
    "id": 96,
    "a": 9,
    "q": "What is the parent class of all AWT components?",
    "o": [
     "java.awt.Panel",
     "java.awt.Component\nc.java.awt.Container",
     "java.awt.Frame",
     "java.awt.Component\nDetailed Solution:  \njava.awt.Component  is the parent class of all AWT components. It provides methods for seting and \ngeting the properties of a component, such as its size and position.  \nNPTELNPTEL Online Certification Courses  \nIndian Institute of Technology Kharagpur"
    ],
    "c": 1
   },
   {
    "id": 97,
    "a": 9,
    "q": "Which event is generated when a user clicks a button in AWT?",
    "o": [
     "Option 1",
     "Option 2",
     "Option 3",
     "Option 4"
    ],
    "c": 1
   },
   {
    "id": 98,
    "a": 9,
    "q": "Which of the following architecture does the Swing framework use?",
    "o": [
     "M VC",
     "MVP",
     "Layered architecture",
     "Master -Slave architecture"
    ],
    "c": 0
   },
   {
    "id": 99,
    "a": 9,
    "q": "A ____ is the basic class for all SWING UI components?",
    "o": [
     "C ontainer",
     "JComponent",
     "Component",
     "Jbox"
    ],
    "c": 1
   },
   {
    "id": 100,
    "a": 10,
    "q": "Which event is generated when a window is resized in AWT?",
    "o": [
     "Wi ndowEvent",
     "ComponentEvent",
     "ResizeEvent",
     "ContainerEvent"
    ],
    "c": 1
   },
   {
    "id": 101,
    "a": 10,
    "q": "Which method is used to remove a component from a container in AWT?",
    "o": [
     "r emove()",
     "deleteComponent()",
     "removeComponent()",
     "destroy()"
    ],
    "c": 0
   },
   {
    "id": 102,
    "a": 10,
    "q": "What is true about the following code.  \nimport javax.swing.* ; \n \npublic class",
    "o": [
     "Both “OK” and “Cancel” buton is added, but only “Cancel” buton is visble.",
     "Only “OK” buton is added and visible, “Cancel” buton is not adde",
     "Only “Cancel” buton will be added and visible, “OK” buton is not adde",
     "Code throws an ERROR."
    ],
    "c": 0
   },
   {
    "id": 103,
    "a": 10,
    "q": "Which of the following function is used to generate the application's top- level window?",
    "o": [
     "J Panel",
     "JFrame",
     "JCombo",
     "JBox"
    ],
    "c": 1
   },
   {
    "id": 104,
    "a": 10,
    "q": "In Java, what is the primary purpose of a layout manager ?",
    "o": [
     "To manage memory allocation",
     "To arrange GUI components within a container",
     "To handle exception handling",
     "To control database connections"
    ],
    "c": 1
   },
   {
    "id": 105,
    "a": 10,
    "q": "Which layout manager divides the container into five regions: North, South, East, West, and Center?",
    "o": [
     "B order Layout",
     "Grid Layout",
     "Flow Layout",
     "Card Layout"
    ],
    "c": 0
   },
   {
    "id": 106,
    "a": 10,
    "q": "Which class provides methods to work with URLs?",
    "o": [
     "URLConnection",
     "HtpURL",
     "NetURL g",
     "URL"
    ],
    "c": 3
   },
   {
    "id": 107,
    "a": 10,
    "q": "What does the following code do?  \nimport javax.swing.* ; \n \npublic class",
    "o": [
     "Creates a JFrame with a JButon labeled \"Programming in Java\"",
     "Compiles with errors",
     "Displays a message dialog",
     "Creates a JPanel with a JButon  labeled \"Programming in Java\""
    ],
    "c": 0
   },
   {
    "id": 108,
    "a": 10,
    "q": "What happens when the button in this Java code snippet is clicked?  \nimport javax.swing.* ; \nimport jav",
    "o": [
     "awt.event.* ; \npublic class",
     "A message dialog with the text \"Welcome to the course\" is displayed",
     "The buton label changes to \"Welcome to the course\"",
     "Nothing happens"
    ],
    "c": 1
   },
   {
    "id": 109,
    "a": 10,
    "q": "What GUI component is used to input the password in this Java code snippet?  \nimport javax.swing.* ; \npublic class",
    "o": [
     "JTextField",
     "JButon",
     "JtextArea",
     "JPasswordField"
    ],
    "c": 3
   },
   {
    "id": 110,
    "a": 10,
    "q": "What does this Java code snippet create?  \nimport javax.swing.* ; \npublic class",
    "o": [
     "A frame with a list of colors displayed as butons",
     "A frame with a combo box containing options \"Red\", \"Green\", and \"Blue\"",
     "A frame with radio butons for selecting colors",
     "A frame with checkboxes for selecting colors"
    ],
    "c": 1
   },
   {
    "id": 111,
    "a": 11,
    "q": "What does this Java code snippet do?  \nimport jav",
    "o": [
     "net.* ; \n \npublic class",
     "Prints the IP address and host name of the local machine",
     "Prints the IP address and host name of \"",
     "Just p rints the IP address of \""
    ],
    "c": 2
   },
   {
    "id": 112,
    "a": 11,
    "q": "What does this Java code snippet do?  \nimport jav",
    "o": [
     "sql.* ; \n \npublic class",
     "Inserts data into the \"employees\" table of a MySQL database",
     "Deletes data from the \"employees\" table of a MySQL database",
     "Updates data in the \"employees\" table of a MySQL database"
    ],
    "c": 0
   },
   {
    "id": 113,
    "a": 11,
    "q": "What does this Java code snippet do?  \nimport jav",
    "o": [
     "sql.* ; \npublic class",
     "Inserts a new employee record into the \"employees\" table",
     "Updates employee records in the \"employees\" table",
     "Deletes employee records from the \"employees\" table"
    ],
    "c": 1
   },
   {
    "id": 114,
    "a": 11,
    "q": "What additional code is needed at #1 to complete this Java program  to send a message ? \nimport jav",
    "o": [
     "net.* ; \npublic class",
     "Socket.Send(packet);",
     "Socket.send(packet);",
     "socket.send(packet);"
    ],
    "c": 3
   },
   {
    "id": 115,
    "a": 11,
    "q": "What is missing in this Java program?  \npublic class",
    "o": [
     "Retrieving the number of employees",
     "Deleting employee records",
     "Driver\"); \n            Connection con = DriverManager. getConnection(  \n                \"jdbc:mysql://localhost:3306/mydatabase\",  \n                \"username\", \"password\"); \n            String query=\"INSERT INTO employees(name, age)VALUES (?, ?)\";  \n            PreparedStatement pstmt = con.prepareStatement(query); \n            pstmt.setString( 1, \"John\"); \n            pstmt.setInt(2, 30); \n            int rowsAffected = pstmt.executeUpdate(); \n            System.out.println(rowsAffected + \" row(s) inserted.\"); \n            con.close(); \n        } catch (Exception e) { \n            System.out.println(e); \n        } \n    } \n}",
     "Importing necessary JDBC libraries"
    ],
    "c": 3
   },
   {
    "id": 116,
    "a": 11,
    "q": "What is the correct order to close database resources?",
    "o": [
     "Connection then Statement then ResultSet",
     "ResultSet then Statement then Connection",
     "Statement then Connection then ResultSet",
     "Statement then ResultSet then Connection"
    ],
    "c": 1
   },
   {
    "id": 117,
    "a": 11,
    "q": "How many types of JDBC drivers there?",
    "o": [
     "3",
     "4",
     "8",
     "10"
    ],
    "c": 1
   },
   {
    "id": 118,
    "a": 11,
    "q": "What is the correct sequence to create a database connection?  \ni. Impo rt JDBC packages.  \nii. Open a connection to the database.  \niii. Load and register the JDBC driver.  \niv. Execute the statement object and return a query resultset.  \nv. Create a statement object to perform a query.  \nvi. Close the resultset and statement objects.  \nvii. Process the resultse t. \nviii. Close the connection.",
    "o": [
     "i, ii, iii, v, iv, vii, viii, vi",
     "i, iii, ii, v, iv, vii, vi, viii",
     "ii, i, iii, iv, viii, vii, v, vi",
     "i, iii, ii, iv, v, vi, vii, viii"
    ],
    "c": 1
   },
   {
    "id": 119,
    "a": 11,
    "q": "Which of the following is correct about connection pooling?",
    "o": [
     "Application server like WebLogic, WebSphere, jBoss  and Tomcat provides the facilities to \nconﬁgure connection pooling.",
     "components like Apache Commons DBCP Component can be used to conﬁgure connection \npooling.",
     "Both of the above.",
     "None of the above."
    ],
    "c": 2
   },
   {
    "id": 120,
    "a": 11,
    "q": "Which of the following is used to test the operation?",
    "o": [
     "JDBC API",
     "JDBC Driver manager",
     "JDBC Test suite",
     "JDBC -ODBC Bridge Drivers"
    ],
    "c": 2
   },
   {
    "id": 121,
    "a": 11,
    "q": "The JDBC architecture consists of _____________ to access a database.",
    "o": [
     "three -tier processing models",
     "two-tier processing models",
     "two-tier and three -tier processing models",
     "None of the above"
    ],
    "c": 2
   },
   {
    "id": 122,
    "a": 12,
    "q": "Which of these obtains a Connection?",
    "o": [
     "Connection.getConnection(url)",
     "Driver.getConnection(url)",
     "DriverManager.getConnection(url)",
     "new Connection(url)"
    ],
    "c": 2
   },
   {
    "id": 123,
    "a": 12,
    "q": "Which class provides methods to create a client -side socket in Java?",
    "o": [
     "ServerSocket",
     "NetSocket",
     "Socket",
     "ClientSocket"
    ],
    "c": 2
   },
   {
    "id": 124,
    "a": 12,
    "q": "What does JDBC stand for?",
    "o": [
     "Java Data Base Connectivity",
     "Java Data Base  Connection",
     "Java Data Base Control",
     "Java DataB ase Connector"
    ],
    "c": 0
   },
   {
    "id": 125,
    "a": 12,
    "q": "Which method can be used to query for a single object using JdbcTemplate?",
    "o": [
     "queryForObject()",
     "queryForList()",
     "query()",
     "singleQuery()"
    ],
    "c": 0
   },
   {
    "id": 126,
    "a": 12,
    "q": "Which of the following statements are correct and would NOT cause a compilation error?  \ni. float[] = new float(3);      \nii. float f1[] = new float[];    \niii. float[] f2  = new float[3];   \niv. float f3[] = new float[3];   \nv. float f4[]= { 1.0f, 2.0f, 2.0f };     \nvi. float f5[] = new float[] { 1.0f, 2.0f, 3.0f};",
    "o": [
     "iii, iv, v, vi",
     "i, ii, iii, iv",
     "ii, iii, v, vi",
     "i, ii, iv, vi"
    ],
    "c": 0
   },
   {
    "id": 127,
    "a": 12,
    "q": "What is the result, if the following program is executed?  \npublic class",
    "o": [
     "“ﬁnally ”",
     "“exception ﬁnished”",
     "“ﬁnally exception ﬁnished”",
     "Compilation fails"
    ],
    "c": 2
   },
   {
    "id": 128,
    "a": 12,
    "q": "What is the output of the following program?  \npublic class",
    "o": [
     "java",
     "ava",
     "java -",
     "with"
    ],
    "c": 0
   },
   {
    "id": 129,
    "a": 12,
    "q": "If you run this program the how many threads will be executed altogether?  \nclass",
    "o": [
     "One thread only.",
     "Two threads only.",
     "Three threads only.",
     "No thread will run in this case."
    ],
    "c": 1
   },
   {
    "id": 130,
    "a": 12,
    "q": "Which of the following method is used to set a frame, say f with size 300 × 200 pixels?  \nJFrame f = newJFrame ();",
    "o": [
     "f.setSize(300, 200);",
     "f.setSize(200, 300);",
     "f.paint(300, 200);",
     "f.setVisible(300, 200);"
    ],
    "c": 0
   },
   {
    "id": 131,
    "a": 12,
    "q": "Which of the following control expressions are valid for an if statement?  \ni. Any integer expression.   \nii. Any Boolean expression.   \niii. A String object.   \niv. Any expression with mixed arithmetic.",
    "o": [
     "only ii",
     "ii, iii",
     "ii,iv",
     "i, ii"
    ],
    "c": 0
   },
   {
    "id": 132,
    "a": 12,
    "q": "Which of the following o ptions correctly initializes the elements of the numbers array with values 1, 2, \n3, 4, and 5?  \npublic class",
    "o": [
     "numbers = {1 , 2, 3, 4, 5};",
     "for (int i = 1; i < numbers. length; i++) { \n    numbers[i] = i;  \n}",
     "numbers[] = {1 , 2, 3, 4, 5};",
     "numbers = new int[]{1, 2, 3, 4, 5};"
    ],
    "c": 3
   },
   {
    "id": 133,
    "a": 12,
    "q": "Which of the following options correctly extracts and prints the word  \"World\" from the str string?  \npublic class StringExample { \n    public static void main(String[] args) { \n        String str = \"Hello, World!\";  \n        //#1 Missing code block \n    } \n}",
    "o": [
     "System .out.println (str.substring (7, 12));",
     "System .out.println (str.subString (7, 12));",
     "System .out.println (str.extract (7, 12));",
     "System .out.println (str.substr (7, 13));"
    ],
    "c": 0
   },
   {
    "id": 134,
    "a": 12,
    "q": "What will be the output of this program?  \npublic class",
    "o": [
     "true false",
     "false true",
     "true true",
     "false false"
    ],
    "c": 0
   },
   {
    "id": 135,
    "a": 12,
    "q": "What will be the output of this program?  \npublic class",
    "o": [
     "Compilation ERROR",
     "“Finally block executed ”",
     "“Arithmetic exception occurred  \nFinally block executed”",
     "Runtime ERROR"
    ],
    "c": 2
   }
  ],
  "explanations": {
   "1": "In the given code snippet, the solve() function is called from the main()  function. Inside the \nsolve() function: int a = 3; initializes the variable a with the value 3 . int res = a++ + \n++a + a++ + ++a; performs a series of arithmetic operations and assigns the result to the variable \nres. a++ is a post -increment operation, which means the value of a is used and then incremented by 1 . \nSo, initially, a++ evaluates to 3, and a becomes 4. ++a is a pre -increm ent operation, which means the \nvalue of a is incremented by 1 and then used. So, atier the previous operation, ++a evaluates to 5, and \na becomes 5. a++ is another post -increment operation. At this point,  a is 5, and the expression \nevaluates to 5. Then, a  becomes 6. ++a is another pre-increment operation. Atier the previous \noperation, ++a evaluates to 7, and a becomes 7. Therefore, the overall expression becomes 3 + 5 + 5 + \n7, which results in 20  and is stored in the variable res. printf(\"%d\", res); prints t he value of \nres, which is 20.",
   "2": "printf is a library function deﬁned under stdio.h header ﬁle that returns the count of characters \nprinted in STDOUT. In this case it prints “Hello” , which is 5 characters, thus the value returned to x  is 5.",
   "3": "The statement does not have an error and wil l compile normally. “ int (*p)[5]; ” is same as \n“int* p[5];”  which is used to declare an  array  of pointers.",
   "4": "In a union, all members share the same memory space, and the size of the union is determined by the \nsize of its largest member. This is because the memory allocated for a union needs to be large enough to \naccommodate the largest member so that it can hold any of the union's members. When calculating the \nsize of a union, it is suﬃcient to consider only the largest member. The sizes of other members do not \ncontribute to the overall size of the union since they share the same memory space.",
   "5": "Since ptr is just a pointer to  a, when the value of a changes, so does the value in the pointer. Thus \n*ptr += 1; will increment the value of a  as well.",
   "6": "printf is a library function deﬁned under stdio.h header ﬁle. The compiler adds 5 to the base \naddress of the string through the expression 5 + \\” Test_Quiz\\”  . Then the string \\” Quiz\\”  gets \npassed to the standard library function as an argument.  Then the string is printed normally without error.",
   "7": "volatile is not a storage class speciﬁer  in C. volatile and const are type qualiﬁers.",
   "8": "Declaring a global variable as static limits its scope to the same ﬁle in which it is deﬁned. A static function \nis only accessible to the same ﬁle in which it is deﬁned. A local variable declared as static preserves the \nvalue of the variable between the function calls.",
   "9": "The sizeof() operator would return size of array. To get size of string stored in array, we need to use \nstrlen(). The following program prints 20 which is the size  of the array.",
   "10": "All components of a for loop is optional and there is no syntax error in the code.",
   "11": "The above code inverts the value of x, i.e., performs a NOT operation. Using x = 1 – x; we can get \nthe same eﬀect in just a single line.  If x is 1 then 1-x  will set the value of x  as 0 and vice versa.",
   "12": "struct node *s[10]; deﬁnes a pointer array of 10 elements of type struct node*.",
   "13": "swap()  function will only swap the values of local variables a and b, however, there will be no eﬀect on \nx and y, i.e. the y will remain unchanged.",
   "14": "arr, &arr[0], &arr all refer to base address of 2200.",
   "15": "When we pass an array as a function argument, the base address of the array will be passed.",
   "16": "Java's primary feature is its ability to run on any platiorm without modiﬁcation, thanks to the concept of \nWrite Once, Run Anywhere (WORA).",
   "17": "Java is designed based on the principles of object -oriented programming, promoting concepts like \nencapsulation, inheritance, and polymorphism.",
   "18": "The ﬁnal step in the Java programming process is the execution of the compiled Java program on the \nJava Virtual Machine (JVM).",
   "19": "GCC (GNU Compiler Collection) is not a Java -speciﬁc tool. It is commonly used for compiling C, C++, and \nother languages.",
   "20": "\"Write Once, Run Anywhere\" (WORA ) is a key concept in Java, indicating that code writen in Java can \nrun on any platiorm without modiﬁcation.",
   "21": "Arrays in Java are used to store multiple values of the same type in a single variable.",
   "22": "Identiﬁers in Java can start with a leter, underscore (_), or dollar sign ($).",
   "23": "Java Language Subset is a set of features tailored f or speciﬁc purposes, limiting the use of certain Java \nfeatures.",
   "24": "The Java Virtual Machine (JVM) enables platiorm independence by interpreting Java bytecode, allowing \nJava programs to run on any device with a compatible JVM.",
   "25": "Java Program Editing involves writing and modifying the source code to implement the desired \nfunctionality before compilation.",
   "26": "Polymorphism means \"many forms\", and it occurs when we have many classes that are related to each \nother by inheritance. Object variables (instance variables) represent the behavior of polymorphic \nvariables in Java. It is because object variables of a class can refer to objects of its class as well as objects \nof its subclasses.",
   "27": "The correct syntax for declaring an object is:  \n <class_name> <o bject_name> = new <class_name>().  \nSo the correct declaration of an object named obj is:",
   "28": "A default constructor is a constructor created by the compiler if we do not deﬁne any constructor(s) for a \nclass . A constructor is called \"Default Constructor\" when it doesn't have any parameter.  The Syntax of \ndefault constructor: <class_name>(){} . The default constructor is used to provide the default values to \nthe object like 0, null, etc., depending on the type.  \nExample:  \nclass",
   "29": "At the top level  only public, or package -private  (no explicit modiﬁer)  access modiﬁer is allowed in \nJava . For top level class only two access modiﬁers are allowed : public and default. If a class is \ndeclared as public it is visible everywhere . If a class is declared default it is visible only in same \npackage.",
   "30": "Byte, Short, Integ er, Long, Character, Boolean, Double, Float are called wrapper class in Java.",
   "31": "The new operator is used in Java to create new objects. It can also be used to create an array object.  The \nnew operator instantiates a class by allocating memory for a new object and returning a reference to \nthat memory. The new  operator also invokes the object constructor.  It is used for dynamic memory \nallocation which puts variables on heap memory.",
   "32": "Java does not support global variables. A global variable is one declared at the start of the code and is \naccessible to all parts of the program. Since Java is object -oriented, everything is part of a class. The \nintent is to protect data from being changed. A static variable can be declared, which can be available to \nall instances of a class.",
   "33": "The final keyword is a non -access modiﬁer used for classes, atributes and methods, which makes \nthem non -changeable (impossible to inherit or override). The final keyword is useful when you want a \nvariable to always store the same value, like PI  (3.14159...).",
   "34": "The String argument in the main method is an array hence the args should be changed to args[].",
   "35": "Method print() can be used to print in a single line only but multiple lines can be printed using escape \nsequence ‘ \\n’. Similarly, println() prints in a single line only and multiple lines can be printed using escape \nsequence ‘ \\n’. Method print() prints but does not appends a line break. So, option (b) println() prints and \nthen appends a line break is the only correct option.",
   "36": "On object creation of derived class, ﬁrst base class constructor and then the derived class constructor \nwill be called.",
   "37": "In Java programming language, the super() is a reference variable that is used to refer parent class \nconstructors. The super can be used to call parent class's variables and methods. The super() can be used \nto call parent class' constructors only.",
   "38": "Class A & class B both contain display() method, class B inherits class A, when display() method is called \nby object of class B, display() method of class B is executed rather than that of Class A.",
   "39": "In Java, a static method is bound to the class and not to the instance. Hence, it is not part of the state of \nthe object and doesn't participate in polymorphism and dynamic dispatch, which are necessary for \nmethod overriding.",
   "40": "In Java, a subclass can override methods from its superclass. In this example, the Car class is overriding \nthe move method of the Vehicle class. Since the object is instantiated as a Car, the overridden move \nmethod in the Car class is called, producing the output \"The car moves\"",
   "41": "Notice the use of the keyword \"super\". Using this keyword, you can call superclass's methods and \nvariables.",
   "42": "Method hiding occurs when a subclass deﬁnes a static method with the same name as a static method in \nthe superclass.",
   "43": "In Java, while methods are overridden (dynamic binding), variables are not overridden (static binding). \nTherefore, p.name refers to the Parent class variable, and p.message() refers to the Child class method.",
   "44": "A class marked as “ﬁnal” cannot be extended (subclassed), while an abstract class is meant to be \nextended. Therefore, they are contradictory modiﬁers.",
   "45": "In Java, a static method is bound to the class and not to the instance. Hence, it is not part of the state of \nthe object and doesn't participate in polymorphism and dynamic dispatch, which are necessary for \nmethod overriding.",
   "46": "If you do not specify any access modiﬁer before a variable or method, it is considered to be declared \nunder the default access modiﬁ er.",
   "47": "In order to use instance variables, one should import either a speciﬁc Class or all Classes of a Java \nPackage. So, without using import",
   "48": "The default variables or methods of class can be called inside any class of the same Package.",
   "49": "Here’s the order of the access modiﬁers from the least restrictive to the most restrictive:  \n               public > protected > default > private \nThus, the correct representation of access modiﬁers in order of increasing visibility:  \nprivate < default < protected < public",
   "50": "In Java, two packages java.lang package and a no -name package (also called default package) are \nimported by default in all the classes of Java. Default Package doesn't have a name but it is p resent by \ndefault and thus, it is named the default package. Java Virtual Machine imports these packages by \ndefault in Java internally. And that is the reason we are able to access all the classes of these packages.  \nWe are not required to explicitly import java.lang package or any of its classes like we import other \npackages and their classes such as java.math or java.util.",
   "51": "In Java, a package can be considered as equivalent to C++ language's namespace.  Thus, e very class is \npart of some packag e. All classes in a ﬁle are part of the same package. If no package is speciﬁed, the \nclasses in the ﬁle go into a special unnamed package.",
   "52": "Static import is a feature introduced in Java programming language (versions 5 and above) that allows \nmembers (ﬁelds and methods) deﬁne d in a class as public static to be used in Java code without \nspecifying the class in which the ﬁeld is deﬁned.  The only time we need to pay atention to packages is \nwhen we have a name conﬂict . For example both, java.util and java.sql packages have a class \nnamed Date. So if we  import java.util.*; and import java.sql.*; then the compiler \nwill not be able to ﬁgure out which Date class do we want.",
   "53": "Access speciﬁer of an interface is either public or no speciﬁer. When no access speciﬁer is used then \ndefault access speciﬁer is used due to which interface is available only to other members of the package \nin which it is declared, when declared public it can be used by any code.",
   "54": "interface is inherited by a class using implements.",
   "55": "There is no error in the program and the cal() function is called successfully, computes the square of \nitem and stores in x. Which is successfully printed.",
   "56": "All methods and variables are implicit ly public if interface is declared public.",
   "57": "Static methods in an interface are accessed using the interface name, similar to static methods in classes.",
   "58": "Java Interface treats its variables like constants. So, the classes implementing Interfaces, can not reassign \nvalues to the variables.",
   "59": "Explanation: The JVM needs to distinctly know which value of variable it needs to use. To avoid confusion \nto the JVM interfaceName.variableName is mandatory.",
   "60": "In Java, the ﬁnally is always executed atier the try -catch block. This block can be used to do the common \ncleanup work.",
   "61": "If an exception is not caught in the catch block, it is propagated back to the caller method.",
   "62": "System.out .print() function ﬁrst converts the whole parameters into a string and then prints, before \n“Hello” goes to output stream 1 / 0 error is encountered which is cached by catch block printing just \n“World”.",
   "63": "IndexOutOfBoundsException is raised by TRY block. Observe the order of catching the excepti ons. Always \ncatch a Subclass exception before a Superclass exception.",
   "64": "Even if a RETURN statement is present at the last line of TRY block, the control is not returned to the \ncalling method. The JVM searches for the suitable FINALLY block and executes it before returning. So, the \nFINALLY block has higher priority than a RETURN statement.",
   "65": "The pu rpose of the ﬁnally block in Java exception handling is to clean up resources atier a try block. The \nﬁnally block is executed whether or not an exception is thrown in the try block. It is typically used to \nrelease resources such as open ﬁles, database c onnections, or network sockets that were acquired in the \ntry block. The ﬁnally block ensures that these resources are released even if an exception is thrown, which helps prevent resource leaks and other issues. The ﬁnally block is optional, but it is go od practice \nto use it when dealing with resources that need to be released.",
   "66": "This ﬁrst handler catches exceptions of type Exception ; therefore, it catches any exception, \nincluding ArithmeticException. The second handler could never be reached. This code will not \ncompile.",
   "67": "Inside the for loop, the increment operation i++  is used, which is a post -increment operation. This \nmeans that the increment happens atier the value of i is used. But since this increment operation is \ninside the print statement, it will increment i by 1 right atier printing it, eﬀectively skipping ever y other \nnumber.  So, the output of this code will be:  “1 3”  \nThis is because the i++ operation inside the System.out.print statement causes i  to increment \nby an additional 1 each time through the loop, resulting in only the odd numbers between 1 and 3 being \nprinted.",
   "68": "java.lang.Thread.activeCount()  returns an estimate of the number of active threads in the \ncurrent thread’s thread group and its subgroups  which is 1 in this case since it’s the only thread running \nthe program.",
   "69": "Thread(Runnable a, String str)  creates a new Thread  object. The others are not valid \nconstructors to create a Thread object.",
   "70": "The class  Thread implements the  Runnable  interface, so the assignment is valid. Also, you can create \na new thread object by passing a  Runnable reference to a  Thread constructor, is also valid. Hence, \nthe program will compile without errors and print “Running” in the console.",
   "71": "There are 2 threads. Main program is also run as a thread. And, program has created one child thread. \nHence, total 2 threads are there in the program.",
   "72": "The name of the Tread t is main as it’s the only tread that is running. It is set to currentThread() \nwhich is main.",
   "73": "An instance of the",
   "74": "The default priority given to a thread is 5.",
   "75": "I/O stands for Input/Output in Java. It refers to the process of reading data from input sources and \nwriting data to output destinations.",
   "76": "InputSteam  is used to read data from any source in Java.",
   "77": "Input streams are used to read data from a ﬁle or another source.",
   "78": "The File class is used to create directories and manipulate ﬁles.",
   "79": "BuﬀeredReader is commonly used to read data line by line from a ﬁle.",
   "80": "The provided Java code is creating a FileInputStream object.  FileInputStream is a class in \nJava that is used for reading data from ﬁles. It's part of the Java I/O (Input/Output) package. The string \n\"test.dat\" is the path to the ﬁle. If only a ﬁlename is provided (like in this case), Java will look for the ﬁle \nin the current di rectory of the program. If the ﬁle is located in a diﬀerent directory, you would need to \nprovide the full path to the ﬁle.  \nOnce the FileInputStream  is created, you can use its methods to read data from the ﬁle. For \nexample, the read method can be used to read a single byte of data from the ﬁle, and the \nread(byte[] b) method can be used to read up to b.length bytes of data from the ﬁle into an \narray of bytes.",
   "81": "obj.available()  returns the number of bytes.",
   "82": "No output is printed. CharArrayReader object input1 contains string “abcdefgh” whereas object input2 \ncontains string “bcde”, when while((i=input1.read())==(j=input2.read())) is executed the starting \ncharacter of each object is compared since they are unequal control comes out of loop and nothing is \nprinted on the screen.",
   "83": "i is assigned a value twice. Final variables can be assigned values only one. Following is the compiler \nerror “Main.java:5: error: variable i might already have been assigned” .",
   "84": "By declaring variable private, the variable will not be available in inherited to subclass.",
   "85": "A layout manager is a type of object that organizes components in a container.",
   "86": "The Abstract Window Toolkit (AWT) is Java's original platiorm -dependent windowing, graphics, and user -\ninterface widget toolkit, preceding Swing.",
   "87": "The repaint() method calls automatically update() method and in turn update()  method calls \npaint() method.",
   "88": "A Frame object can be created using the Frame  class itself as well as extending the Frame class.",
   "89": "Event Handling in AWT enables the response to user actions, such as buton clicks or mouse movements, \nin a graphical user interface.",
   "90": "The method  setSize()  can only be used to change the size of a component.",
   "91": "Check box is used for multiple selection items whereas radio buton is used for single selection. For \nexample, if a form is asking for your favorite hobbies, there might be multiple correct answers to it, in \nthat case check box is preferred. And if a form is asking about gender, there must be only one true option \namong the multiple ch oices, in that case radio butons are used.",
   "92": "AWT  components are platiorm -dependent and use native components, whereas Swing components are \nimplemented in Java and are platiorm -independent.",
   "93": "AWT  components provide the building blocks for creating graphical user interfaces (GUIs) in Java \napplications.",
   "94": "The code creates a frame and adds a buton with the label \"",
   "95": "The code sets the layout manager of the 1frame to a 2x2 grid layout using frame.setLayout(new \nGridLayout(2, 2)) .",
   "96": "java.awt.Component  is the parent class of all AWT components. It provides methods for seting and \ngeting the properties of a component, such as its size and position.",
   "97": "The ActionListener event is generated when a user clicks a buton in AWT. It is used to handle buton \nclicks and perform the necessary actions.",
   "98": "Swing framework uses MVC architecture.",
   "99": "A JComponent  is a basic class for all SWING UI components.",
   "100": "The ComponentEvent  is generated when a window is resized in AWT. It is used to handle changes in the \nsize or position of components.",
   "101": "The remove() method is used to remove a component from a container in AWT. It takes a Component \nobject as an argument and removes it from the container.",
   "102": "By default, the layout of the content pane in a JFrame is BorderLayout. Buton OK is placed in the center \nof content pane, then buton Cancel is placed in the same place. So you only can see buton Cancel.",
   "103": "JFrame  is used to generate the application's top -level window.",
   "104": "A layout manager in Java is responsible for arranging and positioning GUI components within a container .",
   "105": "Border Layout divides the container into ﬁve regions, and components can be added to each region: \nNorth, South, East, West, and Center.",
   "106": "The URL class provides methods to work with Uniform Resource Locators.",
   "107": "The code extends JFrame and uses the JButton class object to create a buton with the name of \n“",
   "108": "The code creates a buton with label “Click Me” and in the frame titled “",
   "109": "The GUI component which is used to input the password ﬁeld is JPasswordField.",
   "110": "The code snippet creates a JComboBox  with th e options \"Red\", \"Green\", and \"Blue\", and adds it to a \nJFrame.",
   "111": "The code snippet retrieves and prints the IP address and host name of the speciﬁed domain \n\"",
   "112": "The code snippet establishes a connection to a MySQL database, executes a SELECT query to retrieve \ndata from the \"employees\" table, and prints the results.",
   "113": "The code snippet inserts a new employee record with name \"John\" and age 30 into the \"employees\" \ntable of a MySQL database using a PreparedStatement.",
   "114": "Java is case sensitive. A socket.send() function needs to be called to send the packet to the server.",
   "115": "The program lacks the import statements for the necessary JDBC libraries like java.sql.* .",
   "116": "When manually closing database resources, they should be closed in the reverse order from which they \nwere opened. This means that the ResultSet object is closed before the Statement object and the \nStatement object is closed  before the Connection object.",
   "117": "There are 4 types of JDBC drivers: Type- 1 driver or JDBC -ODBC bridge driver, Type -2 driver or Native- API \ndriver, Type -3 driver or Network Protocol driver, Type -4 driver or Thin driver.",
   "118": "To create a database connection in Java, we must follow the sequence given below:  \n1. Import JDBC packages.  \n2. Load and register the JDBC driver.  \n3. Open a connection to the database.  \n4. Create a statement object to perform a query.  \n5. Execute the statement object and return a query resultset.  \n6. Process the resultset.  \n7. Close the resu ltset and statement objects.  \n8. Close the connection.",
   "119": "If you use an application server like WebLogic, WebSphere, jBoss, Tomcat. , then your application server \nprovides the facilities to conﬁgure for connection pooling. If you are not using an application server then \ncomponents like Apache Commons DBCP Compon ent can be used.",
   "120": "JDBC Test suite: It is used to test the operation(such as insertion, deletion, updation) being performed by \nJDBC Drivers.",
   "121": "The JDBC architecture consists of two -tier and three- tier processing models to access a database.",
   "122": "Option C is the correct answer because DriverManager is the class used in JDBC to get a Connection.",
   "123": "The Socket class in the java.net package is used to create client -side sockets.",
   "124": "JDBC stands for Java DataBase Connectivity.",
   "125": "The queryForObject() method of JdbcTemplate is used to query for a single object.",
   "126": "Option iii, iv, v and vi are syntactically correct for declaration of an array.",
   "127": "The program is syntactically correct and here for two try blocks, there is one catch block.",
   "128": "str.charAt(17 ) returns ‘j’ and str.substring(18,21) retur ns ‘ava’ and they are printed \ntogether.",
   "129": "Here, two thread objects will be in execution: One is the thread due to the execution of the main()  \nmethod and other is the run() of the object t .",
   "130": "The setSize(300,200) method is used to do the job. Other are either syntactically not valid or not \nappropriate.",
   "131": "Any expression with Boolean or integer variables are valid. The condition will evaluate to zero (false) or \nno-zero (true) values. Other options are not valid.",
   "132": "numbers = new int[]{1, 2, 3, 4, 5};  is the correct answer because it initializes the \nnumbers array with values 1, 2, 3, 4, and 5 using array initializer syntax.",
   "133": "System.out.println(str.substring(7, 12));  is the correct answer because the \nsubstring() method extracts a substring from the str string starting from index 7 (inclusive) to \nindex 12 (exclusive), which results in the substring \"World\".",
   "134": "str1  and str2 are string literals and will be interned to the same memory location, so str1 == \nstr2  will be true. However, str3  is created using the new  keyword, so it will be stored in a  diﬀerent \nmemory location, leading str1 == str3 to be false.",
   "135": "The division by zero will throw an ArithmeticException, which will be caught in the catch  block. \nThen, the finally block will be executed."
  }
 }
};
