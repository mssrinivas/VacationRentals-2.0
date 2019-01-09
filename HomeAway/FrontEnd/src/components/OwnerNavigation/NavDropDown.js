 import React from 'react'
import { Button,
  Container,
  Divider,
  Dropdown,
  Header,
  Message,
  Segment,
   } from 'semantic-ui-react'
import MenuList from '@material-ui/core/MenuList';
  import 'semantic-ui-css/semantic.min.css';

import {Redirect} from 'react-router';
let url = "/addproperty/location/";
const NavDropDown = ({propertylocation}) => (
  <div>
  <Dropdown
      selection
      search
      options={propertylocation}
      />
  </div>
)

export default NavDropDown;