import React from 'react';
import { Text } from '../containers/Language';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p className="accent-text">
          <Text tid='design' /> lauutt
        </p>
        <p>© 2024 Lautaro Barceló. None rights reserved.</p>
      </div>
    </footer>
  );
}