# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AtlasEncryptionAtRest <a name="AtlasEncryptionAtRest" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest"></a>

#### Initializers <a name="Initializers" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.Initializer"></a>

```typescript
import { encryptionAtRestL2Constructor } from '@andreaangiolillo/cdk-test2'

new encryptionAtRestL2Constructor.AtlasEncryptionAtRest(scope: Construct, id: string, props: AtlasEncryptionAtRestProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.Initializer.parameter.props">props</a></code> | <code>@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.Initializer.parameter.props"></a>

- *Type:* @andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.isConstruct"></a>

```typescript
import { encryptionAtRestL2Constructor } from '@andreaangiolillo/cdk-test2'

encryptionAtRestL2Constructor.AtlasEncryptionAtRest.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.property.cfnEncryptionAtRest">cfnEncryptionAtRest</a></code> | <code>@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnEncryptionAtRest`<sup>Required</sup> <a name="cfnEncryptionAtRest" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRest.property.cfnEncryptionAtRest"></a>

```typescript
public readonly cfnEncryptionAtRest: CfnEncryptionAtRest;
```

- *Type:* @andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest

---


### CfnCluster <a name="CfnCluster" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster"></a>

A CloudFormation `MongoDB::Atlas::Cluster`.

#### Initializers <a name="Initializers" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

new clusterL1Constructor.CfnCluster(scope: Construct, id: string, props: CfnClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - scope in which this resource is defined. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | - scoped id of the resource. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.Initializer.parameter.props">props</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps</code> | - resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.Initializer.parameter.id"></a>

- *Type:* string

scoped id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.Initializer.parameter.props"></a>

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |

---

##### `toString` <a name="toString" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependsOn` <a name="addDependsOn" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

###### `path`<sup>Required</sup> <a name="path" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Optional</sup> <a name="policy" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

##### `getMetadata` <a name="getMetadata" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.getMetadata.parameter.key"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.isConstruct"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

clusterL1Constructor.CfnCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.isCfnElement"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

clusterL1Constructor.CfnCluster.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.isCfnResource"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

clusterL1Constructor.CfnCluster.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.attrCreatedDate">attrCreatedDate</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Cluster.CreatedDate`. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.attrId">attrId</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Cluster.Id`. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.attrMongoDBVersion">attrMongoDBVersion</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Cluster.MongoDBVersion`. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.attrStateName">attrStateName</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Cluster.StateName`. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.props">props</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps</code> | Resource props. |

---

##### `node`<sup>Required</sup> <a name="node" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrCreatedDate`<sup>Required</sup> <a name="attrCreatedDate" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.attrCreatedDate"></a>

```typescript
public readonly attrCreatedDate: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Cluster.CreatedDate`.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Cluster.Id`.

---

##### `attrMongoDBVersion`<sup>Required</sup> <a name="attrMongoDBVersion" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.attrMongoDBVersion"></a>

```typescript
public readonly attrMongoDBVersion: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Cluster.MongoDBVersion`.

---

##### `attrStateName`<sup>Required</sup> <a name="attrStateName" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.attrStateName"></a>

```typescript
public readonly attrStateName: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Cluster.StateName`.

---

##### `props`<sup>Required</sup> <a name="props" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.props"></a>

```typescript
public readonly props: CfnClusterProps;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps

Resource props.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnCluster.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### CfnEncryptionAtRest <a name="CfnEncryptionAtRest" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest"></a>

A CloudFormation `MongoDB::Atlas::EncryptionAtRest`.

#### Initializers <a name="Initializers" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.Initializer"></a>

```typescript
import { encryptionAtRestL1Constructor } from '@andreaangiolillo/cdk-test2'

new encryptionAtRestL1Constructor.CfnEncryptionAtRest(scope: Construct, id: string, props: CfnEncryptionAtRestProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - scope in which this resource is defined. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.Initializer.parameter.id">id</a></code> | <code>string</code> | - scoped id of the resource. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.Initializer.parameter.props">props</a></code> | <code>@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps</code> | - resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.Initializer.parameter.id"></a>

- *Type:* string

scoped id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.Initializer.parameter.props"></a>

- *Type:* @andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |

---

##### `toString` <a name="toString" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependsOn` <a name="addDependsOn" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

###### `path`<sup>Required</sup> <a name="path" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Optional</sup> <a name="policy" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

##### `getMetadata` <a name="getMetadata" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.getMetadata.parameter.key"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.isConstruct"></a>

```typescript
import { encryptionAtRestL1Constructor } from '@andreaangiolillo/cdk-test2'

encryptionAtRestL1Constructor.CfnEncryptionAtRest.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.isCfnElement"></a>

```typescript
import { encryptionAtRestL1Constructor } from '@andreaangiolillo/cdk-test2'

encryptionAtRestL1Constructor.CfnEncryptionAtRest.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.isCfnResource"></a>

```typescript
import { encryptionAtRestL1Constructor } from '@andreaangiolillo/cdk-test2'

encryptionAtRestL1Constructor.CfnEncryptionAtRest.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.attrId">attrId</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::EncryptionAtRest.Id`. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.props">props</a></code> | <code>@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps</code> | Resource props. |

---

##### `node`<sup>Required</sup> <a name="node" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::EncryptionAtRest.Id`.

---

##### `props`<sup>Required</sup> <a name="props" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.props"></a>

```typescript
public readonly props: CfnEncryptionAtRestProps;
```

- *Type:* @andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps

Resource props.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRest.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

### CfnProject <a name="CfnProject" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject"></a>

A CloudFormation `MongoDB::Atlas::Project`.

#### Initializers <a name="Initializers" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.Initializer"></a>

```typescript
import { projectL1Constructor } from '@andreaangiolillo/cdk-test2'

new projectL1Constructor.CfnProject(scope: Construct, id: string, props: CfnProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - scope in which this resource is defined. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.Initializer.parameter.id">id</a></code> | <code>string</code> | - scoped id of the resource. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.Initializer.parameter.props">props</a></code> | <code>@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps</code> | - resource properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

scope in which this resource is defined.

---

##### `id`<sup>Required</sup> <a name="id" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.Initializer.parameter.id"></a>

- *Type:* string

scoped id of the resource.

---

##### `props`<sup>Required</sup> <a name="props" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.Initializer.parameter.props"></a>

- *Type:* @andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps

resource properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |

---

##### `toString` <a name="toString" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependsOn` <a name="addDependsOn" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries
and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a
property override, either use `addPropertyOverride` or prefix `path` with
"Properties." (i.e. `Properties.TopicName`).

If the override is nested, separate each nested level using a dot (.) in the path parameter.
If there is an array as part of the nesting, specify the index in the path.

To include a literal `.` in the property name, prefix with a `\`. In most
programming languages you will need to write this as `"\\."` because the
`\` itself will need to be escaped.

For example,
```typescript
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']);
cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE');
```
would add the overrides
```json
"Properties": {
   "GlobalSecondaryIndexes": [
     {
       "Projection": {
         "NonKeyAttributes": [ "myattribute" ]
         ...
       }
       ...
     },
     {
       "ProjectionType": "INCLUDE"
       ...
     },
   ]
   ...
}
```

###### `path`<sup>Required</sup> <a name="path" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys
will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Optional</sup> <a name="policy" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility
in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

##### `getMetadata` <a name="getMetadata" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.getMetadata.parameter.key"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.isConstruct"></a>

```typescript
import { projectL1Constructor } from '@andreaangiolillo/cdk-test2'

projectL1Constructor.CfnProject.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.isCfnElement"></a>

```typescript
import { projectL1Constructor } from '@andreaangiolillo/cdk-test2'

projectL1Constructor.CfnProject.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different
versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.isCfnResource"></a>

```typescript
import { projectL1Constructor } from '@andreaangiolillo/cdk-test2'

projectL1Constructor.CfnProject.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.attrCreated">attrCreated</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Project.Created`. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.attrId">attrId</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Project.Id`. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.attrProjectOwnerId">attrProjectOwnerId</a></code> | <code>string</code> | Attribute `MongoDB::Atlas::Project.ProjectOwnerId`. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.props">props</a></code> | <code>@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps</code> | Resource props. |

---

##### `node`<sup>Required</sup> <a name="node" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element
is calculated from the path of the resource node in the construct tree.

To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could
coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrCreated`<sup>Required</sup> <a name="attrCreated" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.attrCreated"></a>

```typescript
public readonly attrCreated: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Project.Created`.

---

##### `attrId`<sup>Required</sup> <a name="attrId" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.attrId"></a>

```typescript
public readonly attrId: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Project.Id`.

---

##### `attrProjectOwnerId`<sup>Required</sup> <a name="attrProjectOwnerId" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.attrProjectOwnerId"></a>

```typescript
public readonly attrProjectOwnerId: string;
```

- *Type:* string

Attribute `MongoDB::Atlas::Project.ProjectOwnerId`.

---

##### `props`<sup>Required</sup> <a name="props" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.props"></a>

```typescript
public readonly props: CfnProjectProps;
```

- *Type:* @andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps

Resource props.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProject.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

---

## Structs <a name="Structs" id="Structs"></a>

### AdvancedAutoScaling <a name="AdvancedAutoScaling" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedAutoScaling"></a>

AWS Automatic Cluster Scaling.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedAutoScaling.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const advancedAutoScaling: clusterL1Constructor.AdvancedAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedAutoScaling.property.compute">compute</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.Compute</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedAutoScaling.property.diskGb">diskGb</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.DiskGb</code> | *No description.* |

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedAutoScaling.property.compute"></a>

```typescript
public readonly compute: Compute;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.Compute

---

##### `diskGb`<sup>Optional</sup> <a name="diskGb" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedAutoScaling.property.diskGb"></a>

```typescript
public readonly diskGb: DiskGb;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.DiskGb

---

### AdvancedRegionConfig <a name="AdvancedRegionConfig" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig"></a>

Hardware specifications for nodes set for a given region.

Each regionConfigs object describes the region's priority in elections and the number and type of MongoDB nodes that MongoDB Cloud deploys to the region. Each regionConfigs object must have either an analyticsSpecs object, electableSpecs object, or readOnlySpecs object. Tenant clusters only require electableSpecs. Dedicated clusters can specify any of these specifications, but must have at least one electableSpecs object within a replicationSpec. Every hardware specification must use the same instanceSize.

Example:

If you set "replicationSpecs[n].regionConfigs[m].analyticsSpecs.instanceSize" : "M30", set "replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M30"if you have electable nodes and"replicationSpecs[n].regionConfigs[m].readOnlySpecs.instanceSize" : "M30" if you have read-only nodes.",

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const advancedRegionConfig: clusterL1Constructor.AdvancedRegionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.analyticsAutoScaling">analyticsAutoScaling</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedAutoScaling</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.analyticsSpecs">analyticsSpecs</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.autoScaling">autoScaling</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedAutoScaling</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.electableSpecs">electableSpecs</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.readOnlySpecs">readOnlySpecs</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |

---

##### `analyticsAutoScaling`<sup>Optional</sup> <a name="analyticsAutoScaling" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.analyticsAutoScaling"></a>

```typescript
public readonly analyticsAutoScaling: AdvancedAutoScaling;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedAutoScaling

---

##### `analyticsSpecs`<sup>Optional</sup> <a name="analyticsSpecs" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.analyticsSpecs"></a>

```typescript
public readonly analyticsSpecs: Specs;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.Specs

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.autoScaling"></a>

```typescript
public readonly autoScaling: AdvancedAutoScaling;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedAutoScaling

---

##### `electableSpecs`<sup>Optional</sup> <a name="electableSpecs" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.electableSpecs"></a>

```typescript
public readonly electableSpecs: Specs;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.Specs

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `readOnlySpecs`<sup>Optional</sup> <a name="readOnlySpecs" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.readOnlySpecs"></a>

```typescript
public readonly readOnlySpecs: Specs;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.Specs

---

##### `regionName`<sup>Optional</sup> <a name="regionName" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

### AdvancedReplicationSpec <a name="AdvancedReplicationSpec" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec"></a>

List of settings that configure your cluster regions.

For Global Clusters, each object in the array represents a zone where your clusters nodes deploy. For non-Global replica sets and sharded clusters, this array has one object representing where your clusters nodes deploy.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const advancedReplicationSpec: clusterL1Constructor.AdvancedReplicationSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec.property.advancedRegionConfigs">advancedRegionConfigs</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig[]</code> | Hardware specifications for nodes set for a given region. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec.property.id">id</a></code> | <code>string</code> | Unique 24-hexadecimal digit string that identifies the replication object for a zone in a Multi-Cloud Cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec.property.numShards">numShards</a></code> | <code>number</code> | Positive integer that specifies the number of shards to deploy in each specified zone. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec.property.zoneName">zoneName</a></code> | <code>string</code> | Human-readable label that identifies the zone in a Global Cluster. |

---

##### `advancedRegionConfigs`<sup>Optional</sup> <a name="advancedRegionConfigs" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec.property.advancedRegionConfigs"></a>

```typescript
public readonly advancedRegionConfigs: AdvancedRegionConfig[];
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedRegionConfig[]

Hardware specifications for nodes set for a given region.

Each regionConfigs object describes the region's priority in elections and the number and type of MongoDB nodes that MongoDB Cloud deploys to the region. Each regionConfigs object must have either an analyticsSpecs object, electableSpecs object, or readOnlySpecs object. Tenant clusters only require electableSpecs. Dedicated clusters can specify any of these specifications, but must have at least one electableSpecs object within a replicationSpec. Every hardware specification must use the same instanceSize.

Example:

If you set "replicationSpecs[n].regionConfigs[m].analyticsSpecs.instanceSize" : "M30", set "replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M30"if you have electable nodes and"replicationSpecs[n].regionConfigs[m].readOnlySpecs.instanceSize" : "M30" if you have read-only nodes.",

---

##### `id`<sup>Optional</sup> <a name="id" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Unique 24-hexadecimal digit string that identifies the replication object for a zone in a Multi-Cloud Cluster.

If you include existing zones in the request, you must specify this parameter. If you add a new zone to an existing Multi-Cloud Cluster, you may specify this parameter. The request deletes any existing zones in the Multi-Cloud Cluster that you exclude from the request.

---

##### `numShards`<sup>Optional</sup> <a name="numShards" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec.property.numShards"></a>

```typescript
public readonly numShards: number;
```

- *Type:* number

Positive integer that specifies the number of shards to deploy in each specified zone.

If you set this value to 1 and "clusterType" : "SHARDED", MongoDB Cloud deploys a single-shard sharded cluster. Don't create a sharded cluster with a single shard for production environments. Single-shard sharded clusters don't provide the same benefits as multi-shard configurations.

---

##### `zoneName`<sup>Optional</sup> <a name="zoneName" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

Human-readable label that identifies the zone in a Global Cluster.

Provide this value only if "clusterType" : "GEOSHARDED".

---

### AtlasEncryptionAtRestProps <a name="AtlasEncryptionAtRestProps" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps"></a>

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.Initializer"></a>

```typescript
import { encryptionAtRestL2Constructor } from '@andreaangiolillo/cdk-test2'

const atlasEncryptionAtRestProps: encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.customerMasterKeyId">customerMasterKeyId</a></code> | <code>string</code> | The AWS customer master key used to encrypt and decrypt the MongoDB master keys. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier of the Atlas project to which the user belongs. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.roleId">roleId</a></code> | <code>string</code> | ID of an AWS IAM role authorized to manage an AWS customer master key. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.enabled">enabled</a></code> | <code>boolean</code> | Specifies whether Encryption at Rest is enabled for an Atlas project. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.profile">profile</a></code> | <code>string</code> | The profile is defined in AWS Secret manager. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.region">region</a></code> | <code>string</code> | The AWS region in which the AWS customer master key exists. |

---

##### `customerMasterKeyId`<sup>Required</sup> <a name="customerMasterKeyId" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.customerMasterKeyId"></a>

```typescript
public readonly customerMasterKeyId: string;
```

- *Type:* string

The AWS customer master key used to encrypt and decrypt the MongoDB master keys.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique identifier of the Atlas project to which the user belongs.

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

ID of an AWS IAM role authorized to manage an AWS customer master key.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Specifies whether Encryption at Rest is enabled for an Atlas project.

To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.
Default Value: true

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

The profile is defined in AWS Secret manager.

See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).

---

##### `region`<sup>Optional</sup> <a name="region" id="@andreaangiolillo/cdk-test2.encryptionAtRestL2Constructor.AtlasEncryptionAtRestProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region in which the AWS customer master key exists.

Default Value: US_EAST_1

---

### AwsKms <a name="AwsKms" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms"></a>

Specifies AWS KMS configuration details and whether Encryption at Rest is enabled for an Atlas project.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms.Initializer"></a>

```typescript
import { encryptionAtRestL1Constructor } from '@andreaangiolillo/cdk-test2'

const awsKms: encryptionAtRestL1Constructor.AwsKms = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms.property.customerMasterKeyId">customerMasterKeyId</a></code> | <code>string</code> | The AWS customer master key used to encrypt and decrypt the MongoDB master keys. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms.property.enabled">enabled</a></code> | <code>boolean</code> | Specifies whether Encryption at Rest is enabled for an Atlas project. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms.property.region">region</a></code> | <code>string</code> | The AWS region in which the AWS customer master key exists. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms.property.roleId">roleId</a></code> | <code>string</code> | ID of an AWS IAM role authorized to manage an AWS customer master key. |

---

##### `customerMasterKeyId`<sup>Optional</sup> <a name="customerMasterKeyId" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms.property.customerMasterKeyId"></a>

```typescript
public readonly customerMasterKeyId: string;
```

- *Type:* string

The AWS customer master key used to encrypt and decrypt the MongoDB master keys.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Specifies whether Encryption at Rest is enabled for an Atlas project.

To disable Encryption at Rest, pass only this parameter with a value of false. When you disable Encryption at Rest, Atlas also removes the configuration details.

---

##### `region`<sup>Optional</sup> <a name="region" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region in which the AWS customer master key exists.

---

##### `roleId`<sup>Optional</sup> <a name="roleId" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms.property.roleId"></a>

```typescript
public readonly roleId: string;
```

- *Type:* string

ID of an AWS IAM role authorized to manage an AWS customer master key.

---

### CfnClusterProps <a name="CfnClusterProps" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps"></a>

The cluster resource provides access to your cluster configurations.

The resource lets you create, edit and delete clusters. The resource requires your Project ID.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const cfnClusterProps: clusterL1Constructor.CfnClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.name">name</a></code> | <code>string</code> | Human-readable label that identifies the advanced cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier of the project the cluster belongs to. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.advancedSettings">advancedSettings</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.backupEnabled">backupEnabled</a></code> | <code>boolean</code> | Flag that indicates whether the cluster can perform backups. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.biConnector">biConnector</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsBiConnector</code> | Settings needed to configure the MongoDB Connector for Business Intelligence for this cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.clusterType">clusterType</a></code> | <code>string</code> | Configuration of nodes that comprise the cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.connectionStrings">connectionStrings</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings</code> | Set of connection strings that your applications use to connect to this cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.diskSizeGb">diskSizeGb</a></code> | <code>number</code> | Storage capacity that the host's root volume possesses expressed in gigabytes. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.encryptionAtRestProvider">encryptionAtRestProvider</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsEncryptionAtRestProvider</code> | Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest for the cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.labels">labels</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsLabels[]</code> | Collection of key-value pairs between 1 to 255 characters in length that tag and categorize the cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.mongoDbMajorVersion">mongoDbMajorVersion</a></code> | <code>string</code> | Major MongoDB version of the cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.paused">paused</a></code> | <code>boolean</code> | Flag that indicates whether the cluster is paused or not. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.pitEnabled">pitEnabled</a></code> | <code>boolean</code> | Flag that indicates whether the cluster uses continuous cloud backups. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.profile">profile</a></code> | <code>string</code> | Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.replicationSpecs">replicationSpecs</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec[]</code> | List of settings that configure your cluster regions. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.rootCertType">rootCertType</a></code> | <code>string</code> | Root Certificate Authority that MongoDB Cloud cluster uses. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.terminationProtectionEnabled">terminationProtectionEnabled</a></code> | <code>boolean</code> | Flag that indicates whether termination protection is enabled on the cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.versionReleaseSystem">versionReleaseSystem</a></code> | <code>string</code> | Method by which the cluster maintains the MongoDB versions. |

---

##### `name`<sup>Required</sup> <a name="name" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Human-readable label that identifies the advanced cluster.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique identifier of the project the cluster belongs to.

---

##### `advancedSettings`<sup>Optional</sup> <a name="advancedSettings" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.advancedSettings"></a>

```typescript
public readonly advancedSettings: ProcessArgs;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs

---

##### `backupEnabled`<sup>Optional</sup> <a name="backupEnabled" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.backupEnabled"></a>

```typescript
public readonly backupEnabled: boolean;
```

- *Type:* boolean

Flag that indicates whether the cluster can perform backups.

If set to true, the cluster can perform backups. You must set this value to true for NVMe clusters. Backup uses Cloud Backups for dedicated clusters and Shared Cluster Backups for tenant clusters. If set to false, the cluster doesn't use backups.

---

##### `biConnector`<sup>Optional</sup> <a name="biConnector" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.biConnector"></a>

```typescript
public readonly biConnector: CfnClusterPropsBiConnector;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsBiConnector

Settings needed to configure the MongoDB Connector for Business Intelligence for this cluster.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

Configuration of nodes that comprise the cluster.

---

##### `connectionStrings`<sup>Optional</sup> <a name="connectionStrings" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: ConnectionStrings;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings

Set of connection strings that your applications use to connect to this cluster.

Use the parameters in this object to connect your applications to this cluster. See the MongoDB [Connection String URI Format](https://docs.mongodb.com/manual/reference/connection-string/) reference for further details.

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.diskSizeGb"></a>

```typescript
public readonly diskSizeGb: number;
```

- *Type:* number

Storage capacity that the host's root volume possesses expressed in gigabytes.

Increase this number to add capacity. MongoDB Cloud requires this parameter if you set replicationSpecs. If you specify a disk size below the minimum (10 GB), this parameter defaults to the minimum disk size value. Storage charge calculations depend on whether you choose the default value or a custom value. The maximum value for disk storage cannot exceed 50 times the maximum RAM for the selected cluster. If you require more storage space, consider upgrading your cluster to a higher tier.

---

##### `encryptionAtRestProvider`<sup>Optional</sup> <a name="encryptionAtRestProvider" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.encryptionAtRestProvider"></a>

```typescript
public readonly encryptionAtRestProvider: CfnClusterPropsEncryptionAtRestProvider;
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsEncryptionAtRestProvider

Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest for the cluster.

To enable customer key management for encryption at rest, the cluster replicationSpecs[n].regionConfigs[m].{type}Specs.instanceSize setting must be M10 or higher and "backupEnabled" : false or omitted entirely.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.labels"></a>

```typescript
public readonly labels: CfnClusterPropsLabels[];
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsLabels[]

Collection of key-value pairs between 1 to 255 characters in length that tag and categorize the cluster.

The MongoDB Cloud console doesn't display your labels.

---

##### `mongoDbMajorVersion`<sup>Optional</sup> <a name="mongoDbMajorVersion" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.mongoDbMajorVersion"></a>

```typescript
public readonly mongoDbMajorVersion: string;
```

- *Type:* string

Major MongoDB version of the cluster.

MongoDB Cloud deploys the cluster with the latest stable release of the specified version.

---

##### `paused`<sup>Optional</sup> <a name="paused" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.paused"></a>

```typescript
public readonly paused: boolean;
```

- *Type:* boolean

Flag that indicates whether the cluster is paused or not.

---

##### `pitEnabled`<sup>Optional</sup> <a name="pitEnabled" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.pitEnabled"></a>

```typescript
public readonly pitEnabled: boolean;
```

- *Type:* boolean

Flag that indicates whether the cluster uses continuous cloud backups.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used.

---

##### `replicationSpecs`<sup>Optional</sup> <a name="replicationSpecs" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.replicationSpecs"></a>

```typescript
public readonly replicationSpecs: AdvancedReplicationSpec[];
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.AdvancedReplicationSpec[]

List of settings that configure your cluster regions.

For Global Clusters, each object in the array represents a zone where your clusters nodes deploy. For non-Global replica sets and sharded clusters, this array has one object representing where your clusters nodes deploy.

---

##### `rootCertType`<sup>Optional</sup> <a name="rootCertType" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.rootCertType"></a>

```typescript
public readonly rootCertType: string;
```

- *Type:* string

Root Certificate Authority that MongoDB Cloud cluster uses.

MongoDB Cloud supports Internet Security Research Group.

---

##### `terminationProtectionEnabled`<sup>Optional</sup> <a name="terminationProtectionEnabled" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.terminationProtectionEnabled"></a>

```typescript
public readonly terminationProtectionEnabled: boolean;
```

- *Type:* boolean

Flag that indicates whether termination protection is enabled on the cluster.

If set to true, MongoDB Cloud won't delete the cluster. If set to false, MongoDB Cloud will delete the cluster.

---

##### `versionReleaseSystem`<sup>Optional</sup> <a name="versionReleaseSystem" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterProps.property.versionReleaseSystem"></a>

```typescript
public readonly versionReleaseSystem: string;
```

- *Type:* string

Method by which the cluster maintains the MongoDB versions.

If value is CONTINUOUS, you must not specify mongoDBMajorVersion

---

### CfnClusterPropsBiConnector <a name="CfnClusterPropsBiConnector" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsBiConnector"></a>

Settings needed to configure the MongoDB Connector for Business Intelligence for this cluster.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsBiConnector.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const cfnClusterPropsBiConnector: clusterL1Constructor.CfnClusterPropsBiConnector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsBiConnector.property.enabled">enabled</a></code> | <code>boolean</code> | Flag that indicates whether MongoDB Connector for Business Intelligence is enabled on the specified cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsBiConnector.property.readPreference">readPreference</a></code> | <code>string</code> | Data source node designated for the MongoDB Connector for Business Intelligence on MongoDB Cloud. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsBiConnector.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Flag that indicates whether MongoDB Connector for Business Intelligence is enabled on the specified cluster.

---

##### `readPreference`<sup>Optional</sup> <a name="readPreference" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsBiConnector.property.readPreference"></a>

```typescript
public readonly readPreference: string;
```

- *Type:* string
- *Default:* ANALYTICS node, or SECONDARY if there are no ANALYTICS nodes.

Data source node designated for the MongoDB Connector for Business Intelligence on MongoDB Cloud.

The MongoDB Connector for Business Intelligence on MongoDB Cloud reads data from the primary, secondary, or analytics node based on your read preferences. Defaults to ANALYTICS node, or SECONDARY if there are no ANALYTICS nodes.

---

### CfnClusterPropsLabels <a name="CfnClusterPropsLabels" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsLabels"></a>

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsLabels.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const cfnClusterPropsLabels: clusterL1Constructor.CfnClusterPropsLabels = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsLabels.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsLabels.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsLabels.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Optional</sup> <a name="value" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsLabels.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### CfnEncryptionAtRestProps <a name="CfnEncryptionAtRestProps" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps"></a>

Returns and edits the Encryption at Rest using Customer Key Management configuration.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps.Initializer"></a>

```typescript
import { encryptionAtRestL1Constructor } from '@andreaangiolillo/cdk-test2'

const cfnEncryptionAtRestProps: encryptionAtRestL1Constructor.CfnEncryptionAtRestProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps.property.awsKms">awsKms</a></code> | <code>@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps.property.projectId">projectId</a></code> | <code>string</code> | Unique identifier of the Atlas project to which the user belongs. |
| <code><a href="#@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps.property.profile">profile</a></code> | <code>string</code> | The profile is defined in AWS Secret manager. |

---

##### `awsKms`<sup>Required</sup> <a name="awsKms" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps.property.awsKms"></a>

```typescript
public readonly awsKms: AwsKms;
```

- *Type:* @andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.AwsKms

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Unique identifier of the Atlas project to which the user belongs.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@andreaangiolillo/cdk-test2.encryptionAtRestL1Constructor.CfnEncryptionAtRestProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

The profile is defined in AWS Secret manager.

See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).

---

### CfnProjectProps <a name="CfnProjectProps" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps"></a>

Retrieves or creates projects in any given Atlas organization.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.Initializer"></a>

```typescript
import { projectL1Constructor } from '@andreaangiolillo/cdk-test2'

const cfnProjectProps: projectL1Constructor.CfnProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.name">name</a></code> | <code>string</code> | Name of the project to create. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.orgId">orgId</a></code> | <code>string</code> | Unique identifier of the organization within which to create the project. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.clusterCount">clusterCount</a></code> | <code>number</code> | The number of Atlas clusters deployed in the project. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.profile">profile</a></code> | <code>string</code> | Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used. |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.projectApiKeys">projectApiKeys</a></code> | <code>@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectApiKey[]</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.projectSettings">projectSettings</a></code> | <code>@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.projectTeams">projectTeams</a></code> | <code>@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectTeam[]</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.withDefaultAlertsSettings">withDefaultAlertsSettings</a></code> | <code>boolean</code> | Flag that indicates whether to create the project with default alert settings. |

---

##### `name`<sup>Required</sup> <a name="name" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the project to create.

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

Unique identifier of the organization within which to create the project.

---

##### `clusterCount`<sup>Optional</sup> <a name="clusterCount" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.clusterCount"></a>

```typescript
public readonly clusterCount: number;
```

- *Type:* number

The number of Atlas clusters deployed in the project.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Profile used to provide credentials information, (a secret with the cfn/atlas/profile/{Profile}, is required), if not provided default is used.

---

##### `projectApiKeys`<sup>Optional</sup> <a name="projectApiKeys" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.projectApiKeys"></a>

```typescript
public readonly projectApiKeys: ProjectApiKey[];
```

- *Type:* @andreaangiolillo/cdk-test2.projectL1Constructor.ProjectApiKey[]

---

##### `projectSettings`<sup>Optional</sup> <a name="projectSettings" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.projectSettings"></a>

```typescript
public readonly projectSettings: ProjectSettings;
```

- *Type:* @andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings

---

##### `projectTeams`<sup>Optional</sup> <a name="projectTeams" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.projectTeams"></a>

```typescript
public readonly projectTeams: ProjectTeam[];
```

- *Type:* @andreaangiolillo/cdk-test2.projectL1Constructor.ProjectTeam[]

---

##### `withDefaultAlertsSettings`<sup>Optional</sup> <a name="withDefaultAlertsSettings" id="@andreaangiolillo/cdk-test2.projectL1Constructor.CfnProjectProps.property.withDefaultAlertsSettings"></a>

```typescript
public readonly withDefaultAlertsSettings: boolean;
```

- *Type:* boolean

Flag that indicates whether to create the project with default alert settings.

---

### Compute <a name="Compute" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Compute"></a>

Automatic Compute Scaling.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Compute.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const compute: clusterL1Constructor.Compute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.Compute.property.enabled">enabled</a></code> | <code>boolean</code> | Flag that indicates whether someone enabled instance size auto-scaling. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.Compute.property.maxInstanceSize">maxInstanceSize</a></code> | <code>string</code> | Maximum instance size to which your cluster can automatically scale. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.Compute.property.minInstanceSize">minInstanceSize</a></code> | <code>string</code> | Minimum instance size to which your cluster can automatically scale. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.Compute.property.scaleDownEnabled">scaleDownEnabled</a></code> | <code>boolean</code> | Flag that indicates whether the instance size may scale down. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Compute.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Flag that indicates whether someone enabled instance size auto-scaling.

Set to true to enable instance size auto-scaling. If enabled, you must specify a value for replicationSpecs[n].regionConfigs[m].autoScaling.compute.maxInstanceSize.
Set to false to disable instance size automatic scaling.

---

##### `maxInstanceSize`<sup>Optional</sup> <a name="maxInstanceSize" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Compute.property.maxInstanceSize"></a>

```typescript
public readonly maxInstanceSize: string;
```

- *Type:* string

Maximum instance size to which your cluster can automatically scale.

MongoDB Cloud requires this parameter if "replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled" : true.

---

##### `minInstanceSize`<sup>Optional</sup> <a name="minInstanceSize" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Compute.property.minInstanceSize"></a>

```typescript
public readonly minInstanceSize: string;
```

- *Type:* string

Minimum instance size to which your cluster can automatically scale.

MongoDB Cloud requires this parameter if "replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled" : true.

---

##### `scaleDownEnabled`<sup>Optional</sup> <a name="scaleDownEnabled" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Compute.property.scaleDownEnabled"></a>

```typescript
public readonly scaleDownEnabled: boolean;
```

- *Type:* boolean

Flag that indicates whether the instance size may scale down.

MongoDB Cloud requires this parameter if "replicationSpecs[n].regionConfigs[m].autoScaling.compute.enabled" : true. If you enable this option, specify a value for replicationSpecs[n].regionConfigs[m].autoScaling.compute.minInstanceSize.

---

### ConnectionStrings <a name="ConnectionStrings" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings"></a>

Collection of Uniform Resource Locators that point to the MongoDB database.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const connectionStrings: clusterL1Constructor.ConnectionStrings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.awsPrivateLink">awsPrivateLink</a></code> | <code>string</code> | Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.awsPrivateLinkSrv">awsPrivateLinkSrv</a></code> | <code>string</code> | Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.private">private</a></code> | <code>string</code> | Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.privateEndpoint">privateEndpoint</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint[]</code> | List of private endpoint connection strings that you can use to connect to this cluster through a private endpoint. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.privateSrv">privateSrv</a></code> | <code>string</code> | Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.standard">standard</a></code> | <code>string</code> | Public connection string that you can use to connect to this cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.standardSrv">standardSrv</a></code> | <code>string</code> | Public connection string that you can use to connect to this cluster. |

---

##### `awsPrivateLink`<sup>Optional</sup> <a name="awsPrivateLink" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.awsPrivateLink"></a>

```typescript
public readonly awsPrivateLink: string;
```

- *Type:* string

Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink.

Each key identifies an Amazon Web Services (AWS) interface endpoint. Each value identifies the related mongodb:// connection string that you use to connect to MongoDB Cloud through the interface endpoint that the key names.

---

##### `awsPrivateLinkSrv`<sup>Optional</sup> <a name="awsPrivateLinkSrv" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.awsPrivateLinkSrv"></a>

```typescript
public readonly awsPrivateLinkSrv: string;
```

- *Type:* string

Private endpoint-aware connection strings that use AWS-hosted clusters with Amazon Web Services (AWS) PrivateLink.

Each key identifies an Amazon Web Services (AWS) interface endpoint. Each value identifies the related mongodb:// connection string that you use to connect to Atlas through the interface endpoint that the key names.

---

##### `private`<sup>Optional</sup> <a name="private" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.private"></a>

```typescript
public readonly private: string;
```

- *Type:* string

Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster.

This connection string uses the mongodb+srv:// protocol. The resource returns this parameter once someone creates a network peering connection to this cluster. This protocol tells the application to look up the host seed list in the Domain Name System (DNS). This list synchronizes with the nodes in a cluster. If the connection string uses this Uniform Resource Identifier (URI) format, you don't need to append the seed list or change the URI if the nodes change. Use this URI format if your driver supports it. If it doesn't, use connectionStrings.private. For Amazon Web Services (AWS) clusters, this resource returns this parameter only if you enable custom DNS.

---

##### `privateEndpoint`<sup>Optional</sup> <a name="privateEndpoint" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: PrivateEndpoint[];
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint[]

List of private endpoint connection strings that you can use to connect to this cluster through a private endpoint.

This parameter returns only if you deployed a private endpoint to all regions to which you deployed this clusters' nodes.

---

##### `privateSrv`<sup>Optional</sup> <a name="privateSrv" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.privateSrv"></a>

```typescript
public readonly privateSrv: string;
```

- *Type:* string

Network peering connection strings for each interface Virtual Private Cloud (VPC) endpoint that you configured to connect to this cluster.

This connection string uses the mongodb+srv:// protocol. The resource returns this parameter when someone creates a network peering connection to this cluster. This protocol tells the application to look up the host seed list in the Domain Name System (DNS). This list synchronizes with the nodes in a cluster. If the connection string uses this Uniform Resource Identifier (URI) format, you don't need to append the seed list or change the Uniform Resource Identifier (URI) if the nodes change. Use this Uniform Resource Identifier (URI) format if your driver supports it. If it doesn't, use connectionStrings.private. For Amazon Web Services (AWS) clusters, this parameter returns only if you enable custom DNS.

---

##### `standard`<sup>Optional</sup> <a name="standard" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.standard"></a>

```typescript
public readonly standard: string;
```

- *Type:* string

Public connection string that you can use to connect to this cluster.

This connection string uses the mongodb:// protocol.

---

##### `standardSrv`<sup>Optional</sup> <a name="standardSrv" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ConnectionStrings.property.standardSrv"></a>

```typescript
public readonly standardSrv: string;
```

- *Type:* string

Public connection string that you can use to connect to this cluster.

This connection string uses the mongodb+srv:// protocol.

---

### DiskGb <a name="DiskGb" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.DiskGb"></a>

Automatic cluster storage settings that apply to this cluster.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.DiskGb.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const diskGb: clusterL1Constructor.DiskGb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.DiskGb.property.enabled">enabled</a></code> | <code>boolean</code> | Flag that indicates whether this cluster enables disk auto-scaling. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.DiskGb.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

Flag that indicates whether this cluster enables disk auto-scaling.

The maximum memory allowed for the selected cluster tier and the oplog size can limit storage auto-scaling.

---

### Endpoint <a name="Endpoint" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Endpoint"></a>

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Endpoint.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const endpoint: clusterL1Constructor.Endpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.Endpoint.property.endpointId">endpointId</a></code> | <code>string</code> | Unique string that the cloud provider uses to identify the private endpoint. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.Endpoint.property.providerName">providerName</a></code> | <code>string</code> | Cloud provider in which MongoDB Cloud deploys the private endpoint. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.Endpoint.property.region">region</a></code> | <code>string</code> | Region in which MongoDB Cloud deploys the private endpoint. |

---

##### `endpointId`<sup>Optional</sup> <a name="endpointId" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Endpoint.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Unique string that the cloud provider uses to identify the private endpoint.

---

##### `providerName`<sup>Optional</sup> <a name="providerName" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Endpoint.property.providerName"></a>

```typescript
public readonly providerName: string;
```

- *Type:* string

Cloud provider in which MongoDB Cloud deploys the private endpoint.

---

##### `region`<sup>Optional</sup> <a name="region" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Endpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region in which MongoDB Cloud deploys the private endpoint.

---

### PrivateEndpoint <a name="PrivateEndpoint" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint"></a>

List of private endpoint connection strings that you can use to connect to this cluster through a private endpoint.

This parameter returns only if you deployed a private endpoint to all regions to which you deployed this clusters' nodes.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const privateEndpoint: clusterL1Constructor.PrivateEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint.property.connectionString">connectionString</a></code> | <code>string</code> | Private endpoint-aware connection string that uses the mongodb:// protocol to connect to MongoDB Cloud through a private endpoint. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint.property.endpoints">endpoints</a></code> | <code>@andreaangiolillo/cdk-test2.clusterL1Constructor.Endpoint[]</code> | List that contains the private endpoints through which you connect to MongoDB Cloud when you use connectionStrings.privateEndpoint[n].connectionString or connectionStrings.privateEndpoint[n].srvConnectionString. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint.property.srvConnectionString">srvConnectionString</a></code> | <code>string</code> | Private endpoint-aware connection string that uses the mongodb+srv:// protocol to connect to MongoDB Cloud through a private endpoint. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint.property.type">type</a></code> | <code>string</code> | Enum: "MONGOD" "MONGOS" MongoDB process type to which your application connects. |

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Private endpoint-aware connection string that uses the mongodb:// protocol to connect to MongoDB Cloud through a private endpoint.

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint.property.endpoints"></a>

```typescript
public readonly endpoints: Endpoint[];
```

- *Type:* @andreaangiolillo/cdk-test2.clusterL1Constructor.Endpoint[]

List that contains the private endpoints through which you connect to MongoDB Cloud when you use connectionStrings.privateEndpoint[n].connectionString or connectionStrings.privateEndpoint[n].srvConnectionString.

---

##### `srvConnectionString`<sup>Optional</sup> <a name="srvConnectionString" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint.property.srvConnectionString"></a>

```typescript
public readonly srvConnectionString: string;
```

- *Type:* string

Private endpoint-aware connection string that uses the mongodb+srv:// protocol to connect to MongoDB Cloud through a private endpoint.

The mongodb+srv protocol tells the driver to look up the seed list of hosts in the Domain Name System (DNS). This list synchronizes with the nodes in a cluster. If the connection string uses this Uniform Resource Identifier (URI) format, you don't need to append the seed list or change the Uniform Resource Identifier (URI) if the nodes change. Use this Uniform Resource Identifier (URI) format if your application supports it. If it doesn't, use connectionStrings.privateEndpoint[n].connectionString.

---

##### `type`<sup>Optional</sup> <a name="type" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.PrivateEndpoint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Enum: "MONGOD" "MONGOS" MongoDB process type to which your application connects.

Use MONGOD for replica sets and MONGOS for sharded clusters.

---

### ProcessArgs <a name="ProcessArgs" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs"></a>

Advanced configuration details to add for one cluster in the specified project.

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const processArgs: clusterL1Constructor.ProcessArgs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.defaultReadConcern">defaultReadConcern</a></code> | <code>string</code> | Default level of acknowledgment requested from MongoDB for read operations set for this cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.defaultWriteConcern">defaultWriteConcern</a></code> | <code>string</code> | Default level of acknowledgment requested from MongoDB for write operations set for this cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.failIndexKeyTooLong">failIndexKeyTooLong</a></code> | <code>boolean</code> | Flag that indicates whether you can insert or update documents where all indexed entries don't exceed 1024 bytes. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.javascriptEnabled">javascriptEnabled</a></code> | <code>boolean</code> | Flag that indicates whether the cluster allows execution of operations that perform server-side executions of JavaScript. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.minimumEnabledTlsProtocol">minimumEnabledTlsProtocol</a></code> | <code>string</code> | Minimum Transport Layer Security (TLS) version that the cluster accepts for incoming connections. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.noTableScan">noTableScan</a></code> | <code>boolean</code> | Flag that indicates whether the cluster disables executing any query that requires a collection scan to return results. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.oplogSizeMb">oplogSizeMb</a></code> | <code>number</code> | Storage limit of cluster's oplog expressed in megabytes. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.sampleRefreshIntervalBiConnector">sampleRefreshIntervalBiConnector</a></code> | <code>number</code> | Number of documents per database to sample when gathering schema information. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.sampleSizeBiConnector">sampleSizeBiConnector</a></code> | <code>number</code> | Interval in seconds at which the mongosqld process re-samples data to create its relational schema. |

---

##### `defaultReadConcern`<sup>Optional</sup> <a name="defaultReadConcern" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.defaultReadConcern"></a>

```typescript
public readonly defaultReadConcern: string;
```

- *Type:* string

Default level of acknowledgment requested from MongoDB for read operations set for this cluster.

---

##### `defaultWriteConcern`<sup>Optional</sup> <a name="defaultWriteConcern" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.defaultWriteConcern"></a>

```typescript
public readonly defaultWriteConcern: string;
```

- *Type:* string

Default level of acknowledgment requested from MongoDB for write operations set for this cluster.

---

##### `failIndexKeyTooLong`<sup>Optional</sup> <a name="failIndexKeyTooLong" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.failIndexKeyTooLong"></a>

```typescript
public readonly failIndexKeyTooLong: boolean;
```

- *Type:* boolean

Flag that indicates whether you can insert or update documents where all indexed entries don't exceed 1024 bytes.

If you set this to false, mongod writes documents that exceed this limit but doesn't index them.

---

##### `javascriptEnabled`<sup>Optional</sup> <a name="javascriptEnabled" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.javascriptEnabled"></a>

```typescript
public readonly javascriptEnabled: boolean;
```

- *Type:* boolean

Flag that indicates whether the cluster allows execution of operations that perform server-side executions of JavaScript.

---

##### `minimumEnabledTlsProtocol`<sup>Optional</sup> <a name="minimumEnabledTlsProtocol" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.minimumEnabledTlsProtocol"></a>

```typescript
public readonly minimumEnabledTlsProtocol: string;
```

- *Type:* string

Minimum Transport Layer Security (TLS) version that the cluster accepts for incoming connections.

Clusters using TLS 1.0 or 1.1 should consider setting TLS 1.2 as the minimum TLS protocol version.

---

##### `noTableScan`<sup>Optional</sup> <a name="noTableScan" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.noTableScan"></a>

```typescript
public readonly noTableScan: boolean;
```

- *Type:* boolean

Flag that indicates whether the cluster disables executing any query that requires a collection scan to return results.

---

##### `oplogSizeMb`<sup>Optional</sup> <a name="oplogSizeMb" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.oplogSizeMb"></a>

```typescript
public readonly oplogSizeMb: number;
```

- *Type:* number

Storage limit of cluster's oplog expressed in megabytes.

A value of null indicates that the cluster uses the default oplog size that MongoDB Cloud calculates.

---

##### `sampleRefreshIntervalBiConnector`<sup>Optional</sup> <a name="sampleRefreshIntervalBiConnector" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.sampleRefreshIntervalBiConnector"></a>

```typescript
public readonly sampleRefreshIntervalBiConnector: number;
```

- *Type:* number

Number of documents per database to sample when gathering schema information.

---

##### `sampleSizeBiConnector`<sup>Optional</sup> <a name="sampleSizeBiConnector" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.ProcessArgs.property.sampleSizeBiConnector"></a>

```typescript
public readonly sampleSizeBiConnector: number;
```

- *Type:* number

Interval in seconds at which the mongosqld process re-samples data to create its relational schema.

---

### ProjectApiKey <a name="ProjectApiKey" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectApiKey"></a>

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectApiKey.Initializer"></a>

```typescript
import { projectL1Constructor } from '@andreaangiolillo/cdk-test2'

const projectApiKey: projectL1Constructor.ProjectApiKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectApiKey.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectApiKey.property.roleNames">roleNames</a></code> | <code>string[]</code> | *No description.* |

---

##### `key`<sup>Optional</sup> <a name="key" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectApiKey.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `roleNames`<sup>Optional</sup> <a name="roleNames" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectApiKey.property.roleNames"></a>

```typescript
public readonly roleNames: string[];
```

- *Type:* string[]

---

### ProjectSettings <a name="ProjectSettings" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings"></a>

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings.Initializer"></a>

```typescript
import { projectL1Constructor } from '@andreaangiolillo/cdk-test2'

const projectSettings: projectL1Constructor.ProjectSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings.property.isCollectDatabaseSpecificsStatisticsEnabled">isCollectDatabaseSpecificsStatisticsEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings.property.isDataExplorerEnabled">isDataExplorerEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings.property.isPerformanceAdvisorEnabled">isPerformanceAdvisorEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings.property.isRealtimePerformancePanelEnabled">isRealtimePerformancePanelEnabled</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings.property.isSchemaAdvisorEnabled">isSchemaAdvisorEnabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `isCollectDatabaseSpecificsStatisticsEnabled`<sup>Optional</sup> <a name="isCollectDatabaseSpecificsStatisticsEnabled" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings.property.isCollectDatabaseSpecificsStatisticsEnabled"></a>

```typescript
public readonly isCollectDatabaseSpecificsStatisticsEnabled: boolean;
```

- *Type:* boolean

---

##### `isDataExplorerEnabled`<sup>Optional</sup> <a name="isDataExplorerEnabled" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings.property.isDataExplorerEnabled"></a>

```typescript
public readonly isDataExplorerEnabled: boolean;
```

- *Type:* boolean

---

##### `isPerformanceAdvisorEnabled`<sup>Optional</sup> <a name="isPerformanceAdvisorEnabled" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings.property.isPerformanceAdvisorEnabled"></a>

```typescript
public readonly isPerformanceAdvisorEnabled: boolean;
```

- *Type:* boolean

---

##### `isRealtimePerformancePanelEnabled`<sup>Optional</sup> <a name="isRealtimePerformancePanelEnabled" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings.property.isRealtimePerformancePanelEnabled"></a>

```typescript
public readonly isRealtimePerformancePanelEnabled: boolean;
```

- *Type:* boolean

---

##### `isSchemaAdvisorEnabled`<sup>Optional</sup> <a name="isSchemaAdvisorEnabled" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectSettings.property.isSchemaAdvisorEnabled"></a>

```typescript
public readonly isSchemaAdvisorEnabled: boolean;
```

- *Type:* boolean

---

### ProjectTeam <a name="ProjectTeam" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectTeam"></a>

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectTeam.Initializer"></a>

```typescript
import { projectL1Constructor } from '@andreaangiolillo/cdk-test2'

const projectTeam: projectL1Constructor.ProjectTeam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectTeam.property.roleNames">roleNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectTeam.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |

---

##### `roleNames`<sup>Optional</sup> <a name="roleNames" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectTeam.property.roleNames"></a>

```typescript
public readonly roleNames: string[];
```

- *Type:* string[]

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@andreaangiolillo/cdk-test2.projectL1Constructor.ProjectTeam.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

### Specs <a name="Specs" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs"></a>

#### Initializer <a name="Initializer" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs.Initializer"></a>

```typescript
import { clusterL1Constructor } from '@andreaangiolillo/cdk-test2'

const specs: clusterL1Constructor.Specs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs.property.diskIops">diskIops</a></code> | <code>string</code> | Target throughput desired for storage attached to your AWS-provisioned cluster. Only change this parameter if you:. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs.property.ebsVolumeType">ebsVolumeType</a></code> | <code>string</code> | Type of storage you want to attach to your AWS-provisioned cluster. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs.property.instanceSize">instanceSize</a></code> | <code>string</code> | Hardware specification for the instance sizes in this region. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs.property.nodeCount">nodeCount</a></code> | <code>number</code> | Number of read-only nodes for MongoDB Cloud deploys to the region. |

---

##### `diskIops`<sup>Optional</sup> <a name="diskIops" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs.property.diskIops"></a>

```typescript
public readonly diskIops: string;
```

- *Type:* string

Target throughput desired for storage attached to your AWS-provisioned cluster. Only change this parameter if you:.

set "replicationSpecs[n].regionConfigs[m].providerName" : "AWS".
set "replicationSpecs[n].regionConfigs[m].electableSpecs.instanceSize" : "M30" or greater not including Mxx_NVME tiers.
The maximum input/output operations per second (IOPS) depend on the selected .instanceSize and .diskSizeGB. This parameter defaults to the cluster tier's standard IOPS value. Changing this value impacts cluster cost. MongoDB Cloud enforces minimum ratios of storage capacity to system memory for given cluster tiers. This keeps cluster performance consistent with large datasets.

Instance sizes M10 to M40 have a ratio of disk capacity to system memory of 60:1.
Instance sizes greater than M40 have a ratio of 120:1.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: string;
```

- *Type:* string

Type of storage you want to attach to your AWS-provisioned cluster.

STANDARD volume types can't exceed the default input/output operations per second (IOPS) rate for the selected volume size.

PROVISIONED volume types must fall within the allowable IOPS range for the selected volume size."

---

##### `instanceSize`<sup>Optional</sup> <a name="instanceSize" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs.property.instanceSize"></a>

```typescript
public readonly instanceSize: string;
```

- *Type:* string

Hardware specification for the instance sizes in this region.

Each instance size has a default storage and memory capacity. The instance size you select applies to all the data-bearing hosts in your instance size. If you deploy a Global Cluster, you must choose a instance size of M30 or greater.

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.Specs.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

Number of read-only nodes for MongoDB Cloud deploys to the region.

Read-only nodes can never become the primary, but can enable local reads.

---



## Enums <a name="Enums" id="Enums"></a>

### CfnClusterPropsEncryptionAtRestProvider <a name="CfnClusterPropsEncryptionAtRestProvider" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsEncryptionAtRestProvider"></a>

Cloud service provider that manages your customer keys to provide an additional layer of encryption at rest for the cluster.

To enable customer key management for encryption at rest, the cluster replicationSpecs[n].regionConfigs[m].{type}Specs.instanceSize setting must be M10 or higher and "backupEnabled" : false or omitted entirely.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsEncryptionAtRestProvider.AWS">AWS</a></code> | AWS. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsEncryptionAtRestProvider.GCP">GCP</a></code> | GCP. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsEncryptionAtRestProvider.AZURE">AZURE</a></code> | AZURE. |
| <code><a href="#@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsEncryptionAtRestProvider.NONE">NONE</a></code> | NONE. |

---

##### `AWS` <a name="AWS" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsEncryptionAtRestProvider.AWS"></a>

AWS.

---


##### `GCP` <a name="GCP" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsEncryptionAtRestProvider.GCP"></a>

GCP.

---


##### `AZURE` <a name="AZURE" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsEncryptionAtRestProvider.AZURE"></a>

AZURE.

---


##### `NONE` <a name="NONE" id="@andreaangiolillo/cdk-test2.clusterL1Constructor.CfnClusterPropsEncryptionAtRestProvider.NONE"></a>

NONE.

---

