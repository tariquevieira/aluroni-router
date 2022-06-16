import styles from './TagsPrato.module.scss';
import classNames from 'classnames';
import { Prato } from 'types/Prato';

export default function TagsPrato({ category, size, serving, price }: Prato) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames({
          [styles.tag__tipo]: true,
          [styles[`tag__tipo__${category.label.toLowerCase()}`]]: true,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tag__porcao}>{size}g</div>
      <div className={styles.tag__qtdpessoas}>
        {serving} 2 pessoa{serving === 1 ? '' : 's'}
      </div>
      <div className={styles.tag__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}
