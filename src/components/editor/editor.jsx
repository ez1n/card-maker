import React from 'react';
import CardEditForm from '../card_edit_form/cardEditForm';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
  // const onKeyUp = () => {
  //   const name = nameRef.current.value;
  //   console.log(name);
  // };

  return (
    <main className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <section className={styles.editForm}>
        {cards.map(card => (
          <CardEditForm key={card.id} card={card} />
        ))}
      </section>
    </main>
  )
};

export default Editor;