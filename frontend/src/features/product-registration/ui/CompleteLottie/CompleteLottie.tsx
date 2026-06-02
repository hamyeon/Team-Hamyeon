'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import * as styles from './CompleteLottie.css';

export function CompleteLottie() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <DotLottieReact
        src="/lotties/complete.lottie"
        autoplay
        className={styles.lottie}
      />
    </div>
  );
}