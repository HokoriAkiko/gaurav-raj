Read me for the components made

Each component consists of common parameters such as label , styling etc .

Tailwindcss is the library being used so styling parameter is a string using tailwind css classes to modify the existing
styling of components to suit your needs


Button Component
Parameters
label : string
onClick : function

onClick function is a custom function you can give to the component to perform action on on clicing event
----------------------------------------------------------------------------------------------------------------------------

Card Container Component
Parameters
styling : string
card labels : array<{label : string , styling : string}>[]
data labels : array<{label : string , styling : string}>[]
image : string
image_styling : string

An array of labels and their custom styling could be given to the card . 
Array of data labels and their custom styling could be given.
Card custom styling parameter is to suit the needs (try passing flex flex-row to see how it changes style)
----------------------------------------------------------------------------------------------------------------------------

Image File Component
Parameters
placeholder : string
label : string
required : boolean

Special component to only handle image files , contains required , a boolean parameter to state wheather skip this field 
information or make it compulsary
----------------------------------------------------------------------------------------------------------------------------

Input Field Component
Parameters
type : string
placeholder : string
required : boolean
label : string

Use for text , email , password fields , with required parameters to suit the needs
----------------------------------------------------------------------------------------------------------------------------

Message Component
Parameters
styling : string
message : string
highlight : string

Simple component to handle messages like "Welcome User ... some long paragraph" , with custom styling along with 
highlight feature to highlight a specific part of the message
----------------------------------------------------------------------------------------------------------------------------

