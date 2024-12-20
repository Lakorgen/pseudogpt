import PropTypes from 'prop-types';
import ReactMarkdown from 'https://esm.sh/react-markdown@7';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighLighter } from 'react-syntax-highlighter';
import { hopscotch, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useState, useEffect, useCallback } from 'react';

import toTitleCase from '../utils/toTitleCase';

import { IconBtn } from './Button';
import { useSnackbar } from '../hooks/useSnackbar';

import { iconLogo } from '../assets/assets';

const AiResponse = ({ aiResponse, children }) => {
  const [codeTheme, setCodeTheme] = useState('');

  const { showSnackbar, hideSnackbar } = useSnackbar();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setCodeTheme(mediaQuery.matches ? hopscotch : coy);
    const themeListener = mediaQuery.addEventListener('change', (event) => {
      setCodeTheme(event.matches ? hopscotch : coy);
    });
    return () => mediaQuery.removeEventListener('change', themeListener);
  }, []);

  const handleCopy = useCallback(async (text) => {
    hideSnackbar()
    try {
      await navigator.clipboard.writeText(text);
      showSnackbar({
        message: 'Copying to clipboard',
        timeOut: 2500
      });
    } catch (err) {
      showSnackbar({
        message: err.message,
        type: "error"
      })
      console.log(`Error copying text ${err.message}`);
    }
  }, [showSnackbar, hideSnackbar]);

  const code = ({ children, className, ...rest }) => {
    const match = className?.match(/language-(\w+)/);
    return match ? (
      <>
        <div className='code-block'>
          <div className='p-4 pb-0 font-sans'>
            {toTitleCase(match[1])}
            <SyntaxHighLighter
              {...rest}
              PreTag='div'
              language={match[1]}
              style={codeTheme}
              customStyle={{
                marginBlock: 0,
                padding: '2px',
              }}
              codeTagProps={{
                style: {
                  padding: '14px',
                  fontWeight: 600,
                },
              }}
            >
              {children}
            </SyntaxHighLighter>
          </div>
        </div>
        <div
          className='bg-light-surfaceContainer
        dark:bg-dark-surfaceContainer
          rounded-t-extraSmall rounded-b-medium 
          flex justify-between items-center h-11 
          font-sans text-bodyMedium ps-4 pe-2'
        >
          <p>
            Use code
            <a
              href='#'
              target='_blank'
              className='link ms-2'
            >
              with caution.
            </a>
          </p>
          <IconBtn
            icon='content_copy'
            size='small'
            title='Copy code'
            onClick={handleCopy.bind(null, children)}
          />
        </div>
      </>
    ) : (
      <code className={className}>{children}</code>
    );
  };

  return (
    <div className='grid grid-cols-1 items-start gap-1 py-4 md:grid-cols-[max-content,minmax(0,1fr)] md:gap-5'>
      <figure className='w-8 h-8 grid place-items-center'>
        <img
          src={iconLogo}
          width={32}
          height={32}
          alt='Pseudo Logo'
          className=''
        />
      </figure>
      {children}
      <div className='markdown-content'>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{ code }}
        >
          {aiResponse}
        </ReactMarkdown>
      </div>
    </div>
  );
};

AiResponse.propTypes = {
  aiResponse: PropTypes.string,
  children: PropTypes.any,
};

export default AiResponse;
