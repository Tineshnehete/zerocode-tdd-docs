import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Zerocode TDD Docs</span>,
  project: {
    link: "https://github.com/authorjapps/zerocode",
  },
  chat: {
        link: "https://zerocode-workspace.slack.com/join/shared_invite/enQtNzYxMDAwNTQ3MjY1LTA2YmJjODJhNzQ4ZjBiYTQwZDBmZmNkNmExYjA3ZDk2OGFiZWFmNWJlNGRkOTdiMDQ4ZmQyNzcyNzVjNWQ4ODQ#/shared-invite/email",
    icon:(
	<svg
	  version="1.1"
	  id="Layer_1"
	  xmlns="http://www.w3.org/2000/svg"
	  xmlnsXlink="http://www.w3.org/1999/xlink"
	  x="0px"
	  y="0px"
	  viewBox="0 0 270 270"
	  style={{ enableBackground: "new 0 0 270 270" }}
	  xmlSpace="preserve"
	>
	  <g>
	    <g>
	      <path d="M99.4,151.2c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h12.9V151.2z" />
	      <path
	        d="M105.9,151.2c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9
				C105.9,183.5,105.9,151.2,105.9,151.2z"
	      />
	    </g>
	    <g>
	      <path d="M118.8,99.4c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v12.9H118.8z" />
	      <path
	        d="M118.8,105.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H86.5c-7.1,0-12.9-5.8-12.9-12.9s5.8-12.9,12.9-12.9
				C86.5,105.9,118.8,105.9,118.8,105.9z"
	      />
	    </g>
	    <g>
	      <path d="M170.6,118.8c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9h-12.9V118.8z" />
	      <path
	        d="M164.1,118.8c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V86.5c0-7.1,5.8-12.9,12.9-12.9
				c7.1,0,12.9,5.8,12.9,12.9V118.8z"
	      />
	    </g>
	    <g>
	      <path d="M151.2,170.6c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9v-12.9H151.2z" />
	      <path
	        d="M151.2,164.1c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9
				c0,7.1-5.8,12.9-12.9,12.9H151.2z"
	      />
	    </g>
	  </g>
	</svg>

    )
  },
  docsRepositoryBase:
    "https://github.com/authorjapps/zerocode-tdd-docs/blob/main",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
