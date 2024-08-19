// Import fonts
import './fonts.css';

// Import JQuery
import $ from 'jquery';

// Import Font Awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBacon, faAnchor } from '@fortawesome/free-solid-svg-icons';

library.add(faBacon);
library.add(faAnchor);
dom.watch();

const body = $('body');

const p = $("<p></p>").text("Inserindo texto").css("color", "red");

body.append(p);