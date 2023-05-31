import styles from "../../styles.module.css";
import WardrobeArea from "../WardrobeArea";
import DropArea from "../DropArea";

export default function Outfits() {
  //   const [basket, setBasket] = useState([]);

  //   const [{ isOver }, dropRef] = useDrop({
  //     accept: image,
  //     drop: (item) =>
  //       setBasket((basket) =>
  //         !basket.includes(item) ? [...basket, item] : basket
  //       ),
  //     collect: (monitor) => ({
  //       isOver: monitor.isOver(),
  //     }),
  //   });
  return (
    // <div className={styles.outfitsSection} ref={dropRef}>
    //   {basket.map((item) => ({}))}
    // </div>
    <div className={styles.outfitsSection}>
      <WardrobeArea className={styles.dragArea} showFilter={true} />
      <DropArea className={styles.dropArea} />
    </div>
  );
}
