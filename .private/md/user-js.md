#### User page dynamics

-   Signed Out
    -   Sign in with Google
    -   Pop Up
    -   Block disappears
    -   User profile is written
    -   New block appears

-   Signed In
    -   Sign Out
    -   Block disappears
    -   New block appears

``` javascript
const toggleBlock = (visible, hidden) => {
	visible.style.visibility = "visible"
	visible.style.opacity = "1"
	hidden.style.visibility = "hidden"
	hidden.style.opacity = "0"
}
```