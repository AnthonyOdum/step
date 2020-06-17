// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import com.google.gson.Gson;
import java.util.List;
import java.util.ArrayList;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {


  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
	  Query query = new Query("Comment").addSort("timestamp", Query.SortDirection.DESCENDING);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    PreparedQuery results = datastore.prepare(query);
    
    System.out.println("Results: " + results);

    List<String> comments = new ArrayList<String>();
    int option = Integer.parseInt(getParameter(request, "numComs", "1"));

    for(Entity entity : results.asIterable()) {
      String comment = (String) entity.getProperty("comment");
      System.out.println("List Size: " + comments.size());
      System.out.println("Comment " + comment);
      System.out.println("List: " + comments);
      if(comments.size() == option) {
        break;
      }
      comments.add(comment);
      System.out.println("List: " + comments);
    }

    System.out.println("List: " + comments);
    response.setContentType("application/json");
    String json = new Gson().toJson(comments);
    response.getWriter().println(json);
  }

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String text = request.getParameter("text-area");
    long timestamp = System.currentTimeMillis();

    if(text.equals("")) {

    } else {

    Entity comment = new Entity("Comment");
    comment.setProperty("comment", text);
    comment.setProperty("timestamp", timestamp);

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(comment);
    
    }

    // Redirect back to the HTML page.
    // response.sendRedirect("/index.html");
	}

  private String getParameter(HttpServletRequest request, String name, String defaultValue) {
    System.out.println("Name " + name);
    String value = request.getParameter(name);
    System.out.println("String " + value);

    if(value == null) {
      return defaultValue;
    }

    return value;
  }
}