"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[334],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3315:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"howto",title:"How to use Gatekeeper"},l=void 0,p={unversionedId:"howto",id:"version-v3.13.x/howto",title:"How to use Gatekeeper",description:"Gatekeeper uses the OPA Constraint Framework to describe and enforce policy. Look there for more detailed information on their semantics and advanced usage.",source:"@site/versioned_docs/version-v3.13.x/howto.md",sourceDirName:".",slug:"/howto",permalink:"/gatekeeper/website/docs/howto",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.13.x/howto.md",tags:[],version:"v3.13.x",frontMatter:{id:"howto",title:"How to use Gatekeeper"},sidebar:"docs",previous:{title:"Examples",permalink:"/gatekeeper/website/docs/examples"},next:{title:"Audit",permalink:"/gatekeeper/website/docs/audit"}},d={},c=[{value:"Constraint Templates",id:"constraint-templates",level:2},{value:"Constraints",id:"constraints",level:2},{value:"The match field",id:"the-match-field",level:3},{value:"The parameters field",id:"the-parameters-field",level:3},{value:"The enforcementAction field",id:"the-enforcementaction-field",level:3},{value:"Listing constraints",id:"listing-constraints",level:3},{value:"Input Review",id:"input-review",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Gatekeeper uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/frameworks/tree/master/constraint"},"OPA Constraint Framework")," to describe and enforce policy. Look there for more detailed information on their semantics and advanced usage."),(0,r.kt)("h2",{id:"constraint-templates"},"Constraint Templates"),(0,r.kt)("p",null,"Before you can define a constraint, you must first define a ",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/constrainttemplates"},(0,r.kt)("inlineCode",{parentName:"a"},"ConstraintTemplate")),", which describes both the ",(0,r.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/latest/#rego"},"Rego")," that enforces the constraint and the schema of the constraint. The schema of the constraint allows an admin to fine-tune the behavior of a constraint, much like arguments to a function."),(0,r.kt)("p",null,"Here is an example constraint template that requires all labels described by the constraint to be present:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8srequiredlabels\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sRequiredLabels\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          properties:\n            labels:\n              type: array\n              items:\n                type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8srequiredlabels\n\n        violation[{"msg": msg, "details": {"missing_labels": missing}}] {\n          provided := {label | input.review.object.metadata.labels[label]}\n          required := {label | label := input.parameters.labels[_]}\n          missing := required - provided\n          count(missing) > 0\n          msg := sprintf("you must provide labels: %v", [missing])\n        }\n')),(0,r.kt)("p",null,"You can install this ConstraintTemplate with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/master/demo/basic/templates/k8srequiredlabels_template.yaml\n")),(0,r.kt)("h2",{id:"constraints"},"Constraints"),(0,r.kt)("p",null,"Constraints are then used to inform Gatekeeper that the admin wants a ConstraintTemplate to be enforced, and how. This constraint uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"K8sRequiredLabels")," constraint template above to make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"gatekeeper")," label is defined on all namespaces:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sRequiredLabels\nmetadata:\n  name: ns-must-have-gk\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Namespace"]\n  parameters:\n    labels: ["gatekeeper"]\n')),(0,r.kt)("p",null,"You can install this Constraint with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/master/demo/basic/constraints/all_ns_must_have_gatekeeper.yaml\n")),(0,r.kt)("h3",{id:"the-match-field"},"The match field"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," field defines which resources the constraint will be applied to. It supports the following types of matchers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kinds")," accepts a list of objects with ",(0,r.kt)("inlineCode",{parentName:"li"},"apiGroups")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"kinds")," fields that list the groups/kinds of objects to which the constraint will apply. If multiple groups/kinds objects are specified, only one match is needed for the resource to be in scope."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scope")," determines if cluster-scoped and/or namespaced-scoped resources are matched.  Accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Cluster"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"Namespaced"),". (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespaces")," is a list of namespace names. If defined, a constraint only applies to resources in a listed namespace.  Namespaces also supports a prefix-based glob.  For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"namespaces: [kube-*]")," matches both ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-system")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-public"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"excludedNamespaces")," is a list of namespace names. If defined, a constraint only applies to resources not in a listed namespace. ExcludedNamespaces also supports a prefix-based glob.  For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"excludedNamespaces: [kube-*]")," matches both ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-system")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"kube-public"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"labelSelector")," is the combination of two optional fields: ",(0,r.kt)("inlineCode",{parentName:"li"},"matchLabels")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"matchExpressions"),".  These two fields provide different methods of selecting or excluding k8s objects based on the label keys and values included in object metadata.  All selection expressions are ANDed to determine if an object meets the cumulative requirements of the selector."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespaceSelector")," is a label selector against an object's containing namespace or the object itself, if the object is a namespace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," is the name of a Kubernetes object.  If defined, it matches against objects with the specified name.  Name also supports a prefix-based glob.  For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"name: pod-*")," matches both ",(0,r.kt)("inlineCode",{parentName:"li"},"pod-a")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"pod-b"),".")),(0,r.kt)("p",null,"Note that if multiple matchers are specified, a resource must satisfy each top-level matcher (",(0,r.kt)("inlineCode",{parentName:"p"},"kinds"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"namespaces"),", etc.) to be in scope. Each top-level matcher has its own semantics for what qualifies as a match. An empty matcher, a undefined ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," field, is deemed to be inclusive (matches everything). Also understand ",(0,r.kt)("inlineCode",{parentName:"p"},"namespaces"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"excludedNamespaces"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"namespaceSelector")," will match on cluster scoped resources which are not namespaced. To avoid this adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespaced"),"."),(0,r.kt)("h3",{id:"the-parameters-field"},"The parameters field"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," field describes the intent of a constraint. It can be referenced as ",(0,r.kt)("inlineCode",{parentName:"p"},"input.parameters")," by the ConstraintTemplate's Rego source code. Gatekeeper populates ",(0,r.kt)("inlineCode",{parentName:"p"},"input.parameters")," with values passed into the ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," field in the Constraint."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'      rego: |\n        package k8srequiredlabels\n\n        violation[{"msg": msg, "details": {"missing_labels": missing}}] {\n          provided := {label | input.review.object.metadata.labels[label]}\n          required := {label | label := input.parameters.labels[_]}\n          missing := required - provided\n          count(missing) > 0\n          msg := sprintf("you must provide labels: %v", [missing])\n        }\n')),(0,r.kt)("p",null,"The schema for the input Constraint ",(0,r.kt)("inlineCode",{parentName:"p"},"parameters")," is defined in the ConstraintTemplate. The API server will reject a Constraint with an incorrect parameters field if the data types do not match."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Apply the Constraint with incorrect parameters schema\n$ cat << EOF | kubectl apply -f -\napiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sRequiredLabels\nmetadata:\n  name: ns-must-have-gk\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Namespace"]\n  parameters:\n    # Note that "labels" is now an array item, rather than an object\n    - labels: ["gatekeeper"]\nEOF\nThe K8sRequiredLabels "ns-must-have-gk" is invalid: spec.parameters: Invalid value: "array": spec.parameters in body must be of type object: "array"\n')),(0,r.kt)("h3",{id:"the-enforcementaction-field"},"The enforcementAction field"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"enforcementAction")," field defines the action for handling Constraint violations. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"enforcementAction")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"deny")," as the default behavior is to deny admission requests with any violation. Other supported enforcementActions include ",(0,r.kt)("inlineCode",{parentName:"p"},"dryrun")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),". Refer to ",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/violations"},"Handling Constraint Violations")," for more details."),(0,r.kt)("h3",{id:"listing-constraints"},"Listing constraints"),(0,r.kt)("p",null,"You can list all constraints in a cluster with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get constraints\n")),(0,r.kt)("h3",{id:"input-review"},"Input Review"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"input.review")," object stores the ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/k8s.io/kubernetes/pkg/apis/admission#AdmissionRequest"},"admission request")," under evaluation. It has the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dryRun"),": Describes if the request was invoked by ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl --dry-run"),". This cannot be populated by Kubernetes for audit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kind"),": The resource ",(0,r.kt)("inlineCode",{parentName:"li"},"kind"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"group"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"version")," of the request object under evaluation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": The name of the request object under evaluation. It may be empty if the deployment expects the API server to generate a name for the requested resource."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespace"),": The namespace of the request object under evaluation. Empty for cluster scoped objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"object"),": The request object under evaluation to be created or modified."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"oldObject"),": The original state of the request object under evaluation. This is only available for UPDATE operations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"operation"),": The operation for the request (e.g. CREATE, UPDATE). This cannot be populated by Kubernetes for audit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"uid"),": The request's unique identifier. This cannot be populated by Kubernetes for audit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userInfo"),": The request's user's information such as ",(0,r.kt)("inlineCode",{parentName:"li"},"username"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"uid"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"groups"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"extra"),". This cannot be populated by Kubernetes for audit.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOTE"))," For ",(0,r.kt)("inlineCode",{parentName:"p"},"input.review")," fields above that cannot be populated by Kubernetes for audit reviews, the constraint templates that rely on them are not auditable. It is up to the rego author to handle the case where these fields are unset and empty in order to avoid every matching resource being reported as violating resources.")))}u.isMDXComponent=!0}}]);