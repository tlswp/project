/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication2;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.regex.Matcher;  
import java.util.regex.Pattern;
import java.util.Locale;
/**
 *
 * @author User
 */
public class JavaApplication2 {
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        Book book = new Book("ArtPics - история провала","Данил","ProvalCompany",2001);
        HomeLibrary library = new HomeLibrary(book);
        book = new Book("ArtPics - история провала 2","Данил","ProvalCompany",2002);
        library.addBook(book);
        book = new Book("Веселый Фермер","Дима","ProvalCompany",2001);
        library.addBook(book);
        book = new Book("П - значит бревно","Александр","ProvalCompany",2001);
        library.addBook(book);
        library.controlLibrary();
    }
}
 class HomeLibrary{
        private ArrayList<Book> books = new ArrayList<Book>();
        HomeLibrary(ArrayList<Book> books){
            this.books = books;
        }
        HomeLibrary(Book book){
            this.books.add(book);
        }
        public void createBook(String name,String author,String publisher,int releaseDate){
            Book book = new Book(name,author,publisher,releaseDate);
            addBook(book);
        }
        public void remooveBook(int num){
            this.books.remove(num);
        }
        public void addBook(Book book){
            this.books.add(book);
        }
        public void searchBooks(){
            Scanner in = new Scanner(System.in);
            System.out.println("Выберите тип поиска");
            System.out.println("  1 - поиск по названию");
            System.out.println("  2 - поиск по автору");
            System.out.println("  3 - поиск по издателю");
            System.out.println("  4 - поиск по дате издания");
            System.out.print("Выбор поиска: ");
            int n = in.nextInt();
            System.out.println("");
            System.out.print("Поиск кинги: ");
            switch(n){
                case (1):
                    String name = in.next();
            for(int bookNum = 0;bookNum<this.books.size();bookNum++){
                Pattern p = Pattern.compile(name.toUpperCase());
                Matcher m = p.matcher(this.books.get(bookNum).name.toUpperCase());
                if(m.find()){
                    this.books.get(bookNum).printInfo();
                }
            }
            break;
            case (2):
                name = in.next();
            for(int bookNum = 0;bookNum<this.books.size();bookNum++){
                Pattern p = Pattern.compile(name.toUpperCase());
                Matcher m = p.matcher(this.books.get(bookNum).author.toUpperCase());
                if(m.find()){
                    this.books.get(bookNum).printInfo();
                }
            }
            break;
            case (3):
                name = in.next();
            for(int bookNum = 0;bookNum<this.books.size();bookNum++){
                Pattern p = Pattern.compile(name.toUpperCase());
                Matcher m = p.matcher(this.books.get(bookNum).publisher.toUpperCase());
                if(m.find()){
                    this.books.get(bookNum).printInfo();
                }
            }
            break;
            case (4):
                name = in.next();
            for(int bookNum = 0;bookNum<this.books.size();bookNum++){
                Pattern p = Pattern.compile(name.toUpperCase());
                Matcher m = p.matcher(String.valueOf(this.books.get(bookNum).releaseDate).toUpperCase());
                if(m.find()){
                    this.books.get(bookNum).printInfo();
                }
            }
            break;
            }
        }
        public void controlLibrary(){
            Scanner in = new Scanner(System.in);
            System.out.println("Выберите действие");
            System.out.println("  1 - поиск книг");
            System.out.println("  2 - добавить книгу");
            System.out.println("  3 - удалить книгу");
            System.out.println("  4 - сортировка");
            System.out.print("Выбор действия: ");
            int n = in.nextInt();
            switch(n){
                case (1):
                   searchBooks();
                   reloadControl();
            break;
            case (2):
                System.out.print("Введите название: ");
                String name = in.next();
                System.out.print("Введите автора: ");
                String author = in.next();
                System.out.print("Введите издание: ");
                String publisher = in.next();
                System.out.print("Введите дату: ");
                int releaseDate = in.nextInt();
                createBook(name,author,publisher,releaseDate);
                reloadControl();
            break;
            case (3):
                System.out.print("Введите номер книги: ");
                int num = in.nextInt();
                remooveBook(num);
                reloadControl();
            break;
            case (4):
                controlLibrary();
            break;
            default:
                controlLibrary();
                break;
            }
        }
        public void reloadControl(){
            Scanner in = new Scanner(System.in);
            System.out.println("Нажмите 1 чтобы  продожить");
            String i = in.next();
            if("1".equals(i)){
                controlLibrary();
            }
        }
    }
class Book{
    String name;
    String author;
    String publisher;
    int releaseDate;
    Book(String name,String author,String publisher,int releaseDate){
       this.name = name; 
       this.author = author;
       this.publisher = publisher;
       this.releaseDate = releaseDate;
    }
    public void printInfo(){
        System.out.println("Название кинги: "+ this.name + " автор кинги: "+ this.author );
        System.out.println("издатель кинги: "+ this.publisher + " дата издания кинги: "+ this.releaseDate );
    }
}