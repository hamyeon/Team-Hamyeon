import * as styles from './page.css';
import * as text from '@/shared/styles/text.css';
import { FloatingActionButton } from '@/shared/ui/FloatingActionButton';

export default function HomePage() {

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <h1 className={text.title01}>Vintic</h1>
      </section>
      <FloatingActionButton className={styles.fab}>
        상품 등록하기
      </FloatingActionButton>
    </main>
  );
}