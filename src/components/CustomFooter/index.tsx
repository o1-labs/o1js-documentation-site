import React from 'react';
import './styles.css';

export default function CustomFooter(): React.JSX.Element {
  return (
    <footer className="custom-footer">
      <div className="custom-footer__content">
        <div className="custom-footer__links">
          <a
            href="https://discord.com/channels/484437221055922177/915745847692636181"
            className="custom-footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </a>
          <a
            href="https://github.com/o1-labs/o1js"
            className="custom-footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="custom-footer__copyright">
          Copyright © {new Date().getFullYear()} o1Labs. Built with Docusaurus.
        </div>
      </div>
    </footer>
  );
}