/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props
    const {baseUrl, docsUrl} = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    )

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('download.html')}>Getting started</Button>
            <Button href={docUrl('documentation.html')}>Documentation</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props
    const {baseUrl} = siteConfig

    const SubTitle = () => (
      <div
        className="productShowcaseSection"
        style={{textAlign: 'center'}}>
        <h2>Designed for HTML Select tag</h2>
        <MarkdownBlock>Multiple Select has been designed to reduce development time and to require no specific knowledge from developers. It is both featherweight and feature-rich.</MarkdownBlock>

        <div id="codefund" style={{width: '330px', margin: '0 auto !important'}}></div>
      </div>
    )

    const Features = () => (
      <div className="container paddingBottom features">
        <div className="wrapper">
          <div className="gridBlock">
            <div className="blockElement fourByGridBlock">
              <div className="blockContent">
                <h2>Features</h2>
                <MarkdownBlock>- Default option allows showing a checkbox.</MarkdownBlock>
                <MarkdownBlock>- Ability to grouping elements.</MarkdownBlock>
                <MarkdownBlock>- Supports to show multiple items in a single row.</MarkdownBlock>
                <MarkdownBlock>- Select all options.</MarkdownBlock>
                <MarkdownBlock>- Feature to show placeholder.</MarkdownBlock>
              </div>
            </div>

            <div className="blockElement fourByGridBlock">
              <div className="blockContent">
                <h2>Latest release v1.4.1 (2019-09-24)</h2>
                <MarkdownBlock>- **New:** Added `displayHtml` option.</MarkdownBlock>
                <MarkdownBlock>- **New:** Added `html` type of `getSelects` method.</MarkdownBlock>
                <MarkdownBlock>- **New:** Added level support for single group.</MarkdownBlock>
                <MarkdownBlock>- **New:** Added `filterByDataLength` option.</MarkdownBlock>
                <MarkdownBlock>- **New:** Added `customFilter` option support.</MarkdownBlock>
                <MarkdownBlock>- **New:** Added optgroup `styler` support and updated parameter.</MarkdownBlock>
                <MarkdownBlock>- **New:** Added `check` and `uncheck` methods.</MarkdownBlock>
                <MarkdownBlock>- **New:** Added checkInvert method.</MarkdownBlock>
                <MarkdownBlock>- **New:** Added `es-ES` locale.</MarkdownBlock>
                <MarkdownBlock>- **New:** Added data-* attributes support.</MarkdownBlock>
                <MarkdownBlock>- **New:** Added `disabled` prop of vue component.</MarkdownBlock>
                <MarkdownBlock>- **New:** Added Number support for `v-model` of vue component.</MarkdownBlock>
                <MarkdownBlock>- **Update:** Improved default `width` of select.</MarkdownBlock>
                <MarkdownBlock>- **Update:** Improved `single` select style and label bug.</MarkdownBlock>
                <MarkdownBlock>- **Update:** Improved `v-model` and data of vue component.</MarkdownBlock>
                <MarkdownBlock>- **Update:** Fixed init cannot select all bug.</MarkdownBlock>
                <MarkdownBlock>- **Update:** Fixed refresh method bug.</MarkdownBlock>
                <MarkdownBlock>- **Update:** Fixed `filterAcceptOnEnter` bug with `single` option.</MarkdownBlock>
                <MarkdownBlock>- **Update:** Removed multiple-select png.</MarkdownBlock>
                <MarkdownBlock>- **Update:** Disabled `esc` action when `keepOpen` is true.</MarkdownBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <SubTitle />
          <Features />
        </div>
      </div>
    )
  }
}

module.exports = Index
