import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSStranstion, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extend Component {
  state = {
    items: [
      { id: uuid(), name: 'Eggs' },
      { id: uuid(), name: 'Milk' },
      { id: uuid(), name: 'Steak' },
      { id: uuid(), name: 'Water' }
    ]
  }
}

export deafault ShoppingList;
