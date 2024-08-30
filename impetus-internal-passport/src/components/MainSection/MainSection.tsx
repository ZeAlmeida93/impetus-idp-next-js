import { FunctionComponent } from 'react';
import styles from './PhotoItems.module.scss';


const PhotoItems:FunctionComponent = () => {
  	return (
    		<div className={styles.statehover}>
      			<img className={styles.photoIcon} alt="" src="Photo.png" />
      			<div className={styles.commentuserName}>
        				<div className={styles.brackets}>Social App Example.png</div>
        				<div className={styles.brackets1}>Added Aug 1 at 08:04 PM</div>
      			</div>
      			<div className={styles.iconnameParent}>
        				<img className={styles.iconname} alt="" src="Icon/Name.svg" />
        				<img className={styles.iconname} alt="" src="Icon/Name.svg" />
        				<img className={styles.iconname} alt="" src="Icon/Name.svg" />
        				<img className={styles.iconname3} alt="" src="Icon/Name.svg" />
      			</div>
    		</div>);
};

export default PhotoItems;
