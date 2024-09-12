import styles from "./CategoryItem.module.css";
function CategoryItem({ bmiCategories, result }) {
  return bmiCategories.map((category, index) => (
    <li
      key={index}
      className={`${styles.categoryItem} ${
        result >= category.minBMI && result <= category.maxBMI
          ? styles.active
          : ""
      }`}
    >
      <span>{category.category}</span>
      <span>
        {category.minBMI}-{category.maxBMI}
      </span>
    </li>
  ));
}

export default CategoryItem;
