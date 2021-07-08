import React, {useState, useEffect} from 'react';
import styles from 'lib/components/modal.less';

function Modal () {
  const [showFlag, setShowFlag] = useState<boolean>(true)
  const flagHandle = () => {
    setShowFlag(!showFlag)
  }
  return (
    showFlag &&
    <div className={ styles.modalOut } onClick={flagHandle}>
      <div className={ styles.confirmWrapper }>
        Modal 123
        Modal 123
      </div>
    </div>
  );
}

export default Modal;
