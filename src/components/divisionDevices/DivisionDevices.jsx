import React from "react";
import styles from './DivisionDevices.module.css'
import modernPc01 from '../../assets/icons/devices/device-modern-pc-01.webp';
import oldPc01 from '../../assets/icons/devices/device-old-pc-01.webp';
import notebook01 from '../../assets/icons/devices/device-notebook-01.webp';
import modernPc02 from '../../assets/icons/devices/device-modern-pc-02.webp';
import drawPc01 from '../../assets/icons/devices/device-draw-pc-01.webp';
import modernCell from '../../assets/icons/devices/device-modern-cellphone.webp';
import oldPc02 from '../../assets/icons/devices/device-old-pc-02.webp';
import modernPc03 from '../../assets/icons/devices/device-modern-pc-03.webp';
import notebook02 from '../../assets/icons/devices/device-notebook-02.webp';
import oldPc03 from '../../assets/icons/devices/device-old-pc-03.webp';
import oldCell from '../../assets/icons/devices/device-old-cellphone.webp';
import modernPc04 from '../../assets/icons/devices/device-modern-pc-04.webp';
import drawPc02 from '../../assets/icons/devices/device-draw-pc-02.webp';
import oldPc04 from '../../assets/icons/devices/device-old-pc-04.webp';

export default function DivisionDevices() {
    return (
        <div className={`${styles.section} ${styles.theme}`}>
            <div className={styles.sectionList}>
                <img src={modernPc01} width="249px" height="180px" loading="lazy" alt="image-pc1" />
                <img src={oldPc01} width="259px" height="180px" loading="lazy" alt="image-cel1" />
                <img src={notebook01} width="441px" height="180px" loading="lazy" alt="image-pc2" />
                <img src={modernPc02} width="259px" height="180px" loading="lazy" alt="image-pc3" />
                <img src={drawPc01} width="259px" height="180px" loading="lazy" alt="image-cel2" />
                <img src={modernCell} width="254px" height="180px" loading="lazy" alt="image-note1" />
                <img src={oldPc02} width="254px" height="180px" loading="lazy" alt="image-pc4" />
                <img src={modernPc03} width="259px" height="180px" loading="lazy" alt="image-pc5" />
                <img src={notebook02} width="259px" height="180px" loading="lazy" alt="image-pc6" />
                <img src={oldPc03} width="259px" height="180px" loading="lazy" alt="image-note2" />
                <img src={oldCell} width="259px" height="180px" loading="lazy" alt="image-pc7" />
                <img src={modernPc04} width="259px" height="180px" loading="lazy" alt="image-pc8" />
                <img src={drawPc02} width="232px" height="180px" loading="lazy" alt="image-pc9" />
                <img src={oldPc04} width="320px" height="180px" loading="lazy" alt="image-pc10" />
            </div>

            <div className={styles.sectionList}>
                <img src={modernPc01} width="249px" height="180px" loading="lazy" alt="image-pc1" />
                <img src={oldPc01} width="259px" height="180px" loading="lazy" alt="image-cel1" />
                <img src={notebook01} width="441px" height="180px" loading="lazy" alt="image-pc2" />
                <img src={modernPc02} width="259px" height="180px" loading="lazy" alt="image-pc3" />
                <img src={drawPc01} width="259px" height="180px" loading="lazy" alt="image-cel2" />
                <img src={modernCell} width="254px" height="180px" loading="lazy" alt="image-note1" />
                <img src={oldPc02} width="254px" height="180px" loading="lazy" alt="image-pc4" />
                <img src={modernPc03} width="259px" height="180px" loading="lazy" alt="image-pc5" />
                <img src={notebook02} width="259px" height="180px" loading="lazy" alt="image-pc6" />
                <img src={oldPc03} width="259px" height="180px" loading="lazy" alt="image-note2" />
                <img src={oldCell} width="259px" height="180px" loading="lazy" alt="image-pc7" />
                <img src={modernPc04} width="259px" height="180px" loading="lazy" alt="image-pc8" />
                <img src={drawPc02} width="232px" height="180px" loading="lazy" alt="image-pc9" />
                <img src={oldPc04} width="320px" height="180px" loading="lazy" alt="image-pc10" />
            </div>
        </div>
    )
}