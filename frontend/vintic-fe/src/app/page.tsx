import { BottomButtonBar } from '@/shared/ui/BottomButtonBar';
import * as styles from './page.css';
import * as text from '@/shared/styles/text.css';

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <h1 className={text.title01}>Vintic</h1>
      </section>

      <BottomButtonBar
        layout="single"
        action={{
          label: '완료',
          variant: 'primary',
        }}
      />
      <BottomButtonBar
        layout="double"
        leftAction={{
          label: '가격 수정하기',
          variant: 'secondary',
        }}
        rightAction={{
          label: '기준가로 설정하기',
          variant: 'primary',
        }}
      />
    </main>
  );
}