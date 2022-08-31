import { SearchField } from '@aws-amplify/ui-react';
import SEO from "../components/seo";
import React, { Fragment } from 'react';


export default function Home() {
  const inputRef = React.useRef(null);
  const searchButtonRef = React.useRef(null);

  const onClick = React.useCallback(() => {
    inputRef.current.focus();
    alert(`You searched for: ${inputRef.current.value}`);
  }, []);

  React.useEffect(() => {
    const searchButtonRefCurrent = searchButtonRef.current;
    if (searchButtonRef && searchButtonRefCurrent) {
      // Note: this example is contrived to demonstrate using refs.
      // Use the `onSubmit` prop on `SearchField` instead which
      // responds to input field `Enter` keypresses and Submit button clicks.
      searchButtonRefCurrent.addEventListener('click', onClick, false);
      return () => {
        searchButtonRefCurrent.removeEventListener('click', onClick, false);
      };
    }
  }, [onClick]);

    return (
      <Fragment>
        <SEO
          keywords={[`Data Engineering`,`DataEng`,`DataEngBytes`]}
          title="FAQs - DataEngBytes!"
          description="Get all your questions answered - DataEngBytes"
        />
        <SearchField
          label="Password"
          ref={inputRef}
          searchButtonRef={searchButtonRef}
        />
        </Fragment>
      )
  }