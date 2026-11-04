# Akira - YoutTube App

- Head
- Body

  - sidebar
    - Menu Items
  - Main Container

    - buttons list
    - video container
      - video card

  - Debouncing in search bar

  * key - i
  * - render the component
  * - useEffect()
  * - start timeer => make api call after 200 ms
  *
  * key - iph
  * - destroy the component => useEffect return will be call and previous timer will be clear
  * - re-render the component
  * - useEffect()
  * - start new timer => make an api call after 200ms

- Added caching through redux search slice for Search and further optimized it

- N level nested comments using recursion
