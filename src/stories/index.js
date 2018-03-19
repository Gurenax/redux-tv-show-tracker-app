import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import {
  BrowserRouter as Router
} from 'react-router-dom'

/* Styles */
import '../styles/dist/index.css'
import '../include/bootstrap'
import '../styles/dist/App.css'

/* Components */
import SearchBar from '../components/ShowList/SearchBar'
import SearchCaption from '../components/ShowList/SearchCaption'
import ShowListItem from '../components/ShowList/ShowListItem'

/* Mock Data */
import {
  showListItem,
  showListItemWithoutImage
} from '../__mockdata__/ShowList'

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))

storiesOf('Search Bar', module)
  .add('default', () =>
    <SearchBar
      onChangeKeyword={action('keyword value changed')}
      onSubmitSearch={action('search submitted')}
    />)
  .add('with keyword value', () => (
    <SearchBar
      keyword="Hello World!"
      onChangeKeyword={action('keyword changed')}
      onSubmitSearch={action('search submitted')}
    />
  ))

storiesOf('Search Caption', module)
  .add('default', () => <SearchCaption message='Hello World!'/>)
  .add('without message value', () => <SearchCaption />)


storiesOf('Show List Item', module)
  .addDecorator(story => (
    <Router>{story()}</Router>
  ))
  .add('default', () =>
    <ShowListItem
      show={showListItem}
      selectShow={action('show selected')}
    />)
  .add('without show image', () =>
    <ShowListItem
      show={showListItemWithoutImage}
      selectShow={action('show selected')}
    />)

