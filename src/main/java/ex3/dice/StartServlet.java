package ex3.dice;

import java.io.*;

import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "startServlet", value = "/dice")
public class StartServlet extends HttpServlet {

    private String message = "I'm kinda useless";


    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.sendRedirect("index.jsp");
    }

    public void destroy() {
    }
}