# brad-api

This is a Node js API in express that has bootcamps. Each bootcamp has courses.

Courses populate their corresponding bootcamp while bootcamps reverse populate their courses via mongoose.

Use a mongoose "pre" hooks to delete courses that belong to a bootcamp if the bootcamp is being deleted

Full CRUD operations on bootcamps and courses.

Use an aggregator to get average of courses on a bootcamp.