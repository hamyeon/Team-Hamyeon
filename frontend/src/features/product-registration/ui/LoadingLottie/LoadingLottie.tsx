'use client';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import * as styles from './LoadingLottie.css';

export function LoadingLottie() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <DotLottieReact
        src="/lotties/loading.lottie"
        loop
        autoplay
        className={styles.lottie}
      />
    </div>
  );
}