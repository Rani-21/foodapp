import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious and Healthy Food, Delivered to You!</h2>
      <p>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home
      </p>
      <p>
        All your meals are cooked with high quality ingredients and farm-fresh
        fruits and veggies, just-in-time and ofcourse by experienced chefs.
      </p>
    </section>
  );
};

export default MealsSummary;
