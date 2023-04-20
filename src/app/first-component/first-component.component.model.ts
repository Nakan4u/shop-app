export class FirstComponentComponent {
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public category: 'new' | 'featured',
    public isAvailable: boolean
  ) {}
}
