export const toggleClick = (event: Event) => {
    const target = (event.target as HTMLElement).classList;
    if (target.contains('on-click')) target.remove('on-click');
    else target.add('on-click');
}