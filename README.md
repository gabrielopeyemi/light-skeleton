# Light Skeleton
Light react Skeleton loader


## 🔧 Installation


## 📦 Usage
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
        <TitleSkeleton 
          style={{ 
            margin: '5px', 
            marginBottom: MB
            }} 
          width={'90%'}
          height={Hei}
        />
        <TitleSkeleton 
          style={{ 
            margin: '5px', 
            marginBottom: MB
          }} 
          width={'90%'} 
          height={Hei}
        />
      </React.Fragment>
    )
  }
  ```
## 👀 Properties

| Property       | Attribute       | Description             | Type      | example     |
| -------------- | --------------- | ----------------------- | --------- | ----------- |
| `width`        | `width`         | Loader Width            | `string`  | `"100%"`    |
| `height`       | `height`        | Loader Height           | `string`  | `"1em"`     |
| `marginBottom` | `marginBottom`  | add margin bottom       | `string`  | `"12px"` |
| `style`        | `style`          | add styling             | `object` | `{{color: red, padding: 20px }}`     |



MIT © [hc-oss](https://github.com/hc-oss)