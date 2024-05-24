This project was initially developed as a result of an interview assignment. I was given to me was a large dataset of consumer product data in .csv format from an e-commerce analytics start-up based in the UK. I designed and developed Insightful Analytics from the ground up based upon the this extensive dataset. The end product is a flexible dashboard giving actionable business insights. 

The design and development of Insightful Analytics included:

- Relational SQL schema design
- Postgres database instance management/hosting with [Supabase](https://supabase.com/)
- Backend API architecture design and development with [Node.js](https://nodejs.org/en) and [Express](https://expressjs.com/)
- Query performance optimization with [Drizzle ORM](https://orm.drizzle.team/)
- Frontend UI design and development with [React](https://react.dev/)/[Nextjs](https://nextjs.org/)

### UI Mockup

First, I visually conceptualized what metrics the dashboard could show based on the data. This included some overall metrics along with navigation panes showing a line chart, bar chart, and detailed table:

![mockup](/images/projects/insightful-mockup.jpg)

This original mockup allowed me to understand how the application would use the data in it's target state. 

### Designing the schema

I then began designing the SQL schema based on the original dataset. The relations where generally static with the exception of the time based data. For this I constructed the schema around the product_info table:

![schema-design](/images/projects/insightful-schema.jpg)

This schema diagram was the final design iteration. Changes were made throughout the design to achieve the following:

- Multiple table indexes for efficient joins on selects
- Relational tables only for highly unique column values
- product table separation as multiple retailers sell the same product

### API/UI integration

Once the database was designed and deployed, the final step was setting up the API and frontend. For the backend server, I went with a straight forward [Node.js](https://nodejs.org/en)/[Express](https://expressjs.com/) REST API. The server returned structured JSON payloads for each section of the UI, which included dynamically built configs for the select inputs.

Here is a short video demo of Insightful Analytics in action:

<video autoplay muted loop>
  <source src="/videos/projects/insightful-demo.mov" type="video/mp4">
</video>
