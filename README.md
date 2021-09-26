# Light Skeleton

```
  const PreLoader = () => {
    let height = '80px';
    return (
      <React.Fragment>
        <FCardLoading>
          <TextSkeleton height={height}/>
        </FCardLoading>
      </React.Fragment>
    )
  }
```
```
  const PreLoader = () => {
    let Hei = '100px';
    let MB = '15px';
    return (
      <React.Fragment>
        <TitleSkeleton style={{ margin: '5px', marginBottom: MB}} width={'90%'} height={Hei}/>
        <TitleSkeleton style={{ margin: '5px', marginBottom: MB}} width={'90%'} height={Hei}/>
      </React.Fragment>
    )
  }
  ```
