### Usage Criteria

- The `SideNavigation` component is for desktop viewports only
- Use when content priority is neutral
- Use when the IA for transactional & informational experiences calls for 7+ categories
- Flexible character count for category and link titles
- We do not recommend using in conjunction with [Breadcrumbs](https://tds.telus.com/components/index.html#breadcrumbs)
- Only one `SideNavigation.Link` should be active at a time

```jsx
<FlexGrid limitWidth={false} gutter={false}>
  <FlexGrid.Row>
    <FlexGrid.Col xs={5}>
      <SideNavigation accordion={true} verticalSpacing={3} category="Optional Category Title">
        <SideNavigation.Link href="#">Top of the page</SideNavigation.Link>
        <SideNavigation.SubMenu label="Overview">
          <SideNavigation.Link href="#introduction" active>
            Link 1
          </SideNavigation.Link>
          <SideNavigation.Link href="#linktwo">Link 2</SideNavigation.Link>
          <SideNavigation.Link href="#linkthree">Link 3</SideNavigation.Link>
        </SideNavigation.SubMenu>
        <SideNavigation.SubMenu label="Reference Architecture">
          <SideNavigation.Link href="#reference">Overview</SideNavigation.Link>
        </SideNavigation.SubMenu>
      </SideNavigation>
    </FlexGrid.Col>
    <FlexGrid.Col xs={5} xsOffset={1}>
      <Box id="introduction" vertical={3}>
        <Heading level="h2">Overview</Heading>
        <Text>This is an introduction to the Side Navigation component</Text>
      </Box>
      <Box id="linktwo" vertical={3}>
        <Heading level="h2">Link 2</Heading>
        <Text>An example of in-page navigation</Text>
      </Box>
      <Box id="linkthree" vertical={3}>
        <Heading level="h2">Link 3</Heading>
        <Text>Additional content for the SideNavigation component</Text>
      </Box>
      <Box id="reference" vertical={3}>
        <Heading level="h2">Reference Architecture</Heading>
        <Text>
          Our software and technical standards are communicated through our reference architecture.
          The Reference Architecture serves as a source of truth for all the technical knowledge,
          software specifications, standards and architecture evolution.
        </Text>
      </Box>
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
